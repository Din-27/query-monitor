import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  isSidebar: false,
  isDrawer: false,
  isDropdownPROD: false,
  isDropdownDEV: false,
  isClickTable: false,
  dataTable: [],
  isClickView: false,
  isPlayground: false,
  dataView: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(type);

  switch (type) {
    case "SHOWON_SIDEBAR":
      return {
        ...state,
        isSidebar: true,
      };
    case "SHOWOFF_SIDEBAR":
      return {
        ...state,
        isSidebar: false,
      };
    case "SHOWON_DRAWER":
      return {
        ...state,
        isDrawer: true,
      };
    case "SHOWOFF_DRAWER":
      return {
        ...state,
        isDrawer: false,
      };
    case "SHOWON_DROPDOWN_DEV":
      return {
        ...state,
        isDropdownDEV: true,
      };
    case "SHOWOFF_DROPDOWN_DEV":
      return {
        ...state,
        isDropdownDEV: false,
      };
    case "SHOWON_DROPDOWN_PROD":
      return {
        ...state,
        isDropdownPROD: true,
      };
    case "SHOWOFF_DROPDOWN_PROD":
      return {
        ...state,
        isDropdownPROD: false,
      };

    case "CLICK_TABLE":
      return {
        ...state,
        isClickTable: true,
        dataTable: payload,
      };
    case "CLICK_OFF":
      return {
        ...state,
        isClickTable: false,
        isClickView: false,
      };
    case "PLAYGROUND":
      return {
        ...state,
        isPlayground: payload,
      };
    case "CLICK_VIEW":
      return {
        ...state,
        isClickView: true,
        dataView: payload,
      };
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
