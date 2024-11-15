
export const onSideBar = (dispatch) => {
  return dispatch({
    type: "SHOWON_SIDEBAR",
  });
};

export const offSideBar = (dispatch) => {
  return dispatch({
    type: "SHOWOFF_SIDEBAR",
  });
};
