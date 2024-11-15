import React from "react";
import { useContext } from "react";
import { Context } from "../context/useContext";
import { offDropdown, onDropdown } from "../helpers/reducer/useDropdown";

export default function Dropdown({ nameProperty }) {
  const [state, dispatch] = useContext(Context);

  let session = "PROD";
  if (nameProperty.includes("DEV")) {
    session = "DEV";
  }

  const handleDropdown = () => {
    if (!state[`isDropdown${session}`]) {
      return onDropdown(dispatch, session);
    }
    return offDropdown(dispatch, session);
  };


  return (
    <div>
      <button
        onClick={handleDropdown}
        id={nameProperty}
        data-dropdown-toggle={nameProperty}
        className="text-white border bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {nameProperty}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id={nameProperty}
        className={`absolute z-10 ${
          !state[`isDropdown${session}`] && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg mt-4 shadow w-32`}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
