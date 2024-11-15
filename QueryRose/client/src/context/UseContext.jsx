import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  isSidebar: false,
  isDrawer: false,
  isDropdownPROD: false,
  isDropdownDEV: false,
};

const reducer = (state, action) => {
  const { type } = action;
  console.log(type);

  switch (type) {
    case "SHOWON_SIDEBAR":
      return {
        isDrawer: state.isDrawer,
        isSidebar: true,
      };
    case "SHOWOFF_SIDEBAR":
      return {
        isDrawer: state.isDrawer,
        isSidebar: false,
      };
    case "SHOWON_DRAWER":
      return {
        isSidebar: state.isSidebar,
        isDrawer: true,
      };
    case "SHOWOFF_DRAWER":
      return {
        isSidebar: state.isSidebar,
        isDrawer: false,
      };
    case "SHOWON_DROPDOWN_DEV":
      return {
        isSidebar: state.isSidebar,
        isDrawer: state.isSidebar,
        isDropdownDEV: true,
      };
    case "SHOWOFF_DROPDOWN_DEV":
      return {
        isSidebar: state.isSidebar,
        isDrawer: state.isSidebar,
        isDropdownDEV: false,
      };
    case "SHOWON_DROPDOWN_PROD":
      return {
        isSidebar: state.isSidebar,
        isDrawer: state.isSidebar,
        isDropdownPROD: true,
      };
    case "SHOWOFF_DROPDOWN_PROD":
      return {
        isSidebar: state.isSidebar,
        isDrawer: state.isSidebar,
        isDropdownPROD: false,
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
