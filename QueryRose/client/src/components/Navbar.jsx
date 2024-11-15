import { useContext } from "react";
import { Context } from "../context/useContext";
import { offSideBar, onSideBar } from "../helpers/reducer/useSidebar";
import Dropdown from "./Dropdown";
import { offDropdown } from "../helpers/reducer/useDropdown";

export default function Navbar() {
  const [state, dispatch] = useContext(Context);

  const handleSideBar = () => {
    if (!state.isSidebar) {
      return onSideBar(dispatch);
    }
    return offSideBar(dispatch);
  };

  const handleSideBarOnOtherElement = () => {
    if (state.isDropdownPROD || state.isDropdownDEV) {
      offDropdown(dispatch, "DEV");
      offDropdown(dispatch, "PROD");
    }
    if (state.isSidebar) {
      return offSideBar(dispatch);
    }
  };

  return (
    <div
      className="absolute z-40 w-full bg-[#0F163F] flex items-center justify-between text-white py-6 p-2"
      onClick={handleSideBarOnOtherElement}
    >
      <div className="flex items-center">
        <button
          onClick={handleSideBar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center ms-3 text-sm rounded-lg hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http:www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <h2 className="ml-6 text-2xl font-bold">Squad SQL Management</h2>
      </div>
      <div className="flex gap-x-4">
        <Dropdown nameProperty="CABANG DEV" />
        <Dropdown nameProperty="CABANG ASLI" />
      </div>
    </div>
  );
}
