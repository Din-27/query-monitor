import React from "react";
import { useContext } from "react";
import { Context } from "../context/useContext";
import { offDrawer, onDrawer } from "../helpers/reducer/useDrawer";

export default function Drawer({ result }) {
  const [state, dispatch] = useContext(Context);

  const handleDrawer = () => {
    if (!state.isDrawer) {
      return onDrawer(dispatch);
    }
    return offDrawer(dispatch);
  };

  const handleSideBarOnOtherElement = () => {
    if (state.isDrawer) {
      return offDrawer(dispatch);
    }
  };

  const header = result.map((x) => Object.keys(x))[0];

  return (
    <div className="absolute w-full bottom-0 inset-x-0 border border-gray-200 rounded-t-xl bg-white">
      <div
        onClick={handleDrawer}
        className="p-4 cursor-pointer hover:bg-gray-50"
        data-drawer-toggle="drawer-swipe"
      >
        <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2"></span>
        <h5
          id="drawer-swipe-label"
          className="inline-flex items-center text-base text-gray-500 font-medium"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
          </svg>
          Table Data
        </h5>
      </div>
      {state.isDrawer && (
        <div className="bg-red-200 max-w-screen h-64 overflow-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {result.length > 0 ? (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    {header.map((x, y) => (
                      <th key={y} scope="col" className="px-6 py-3">
                        {x}
                      </th>
                    ))}
                  </tr>
                </thead>
                {result.map((x, y) => (
                  <tbody key={y}>
                    <tr className="bg-white border-b">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>

                      {header.map((item, idx) => (
                        <th
                          key={idx}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {x[item]}
                        </th>
                      ))}
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
