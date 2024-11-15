
export const onDrawer = (dispatch) => {
    return dispatch({
        type: "SHOWON_DRAWER",
    });
};

export const offDrawer = (dispatch) => {
    return dispatch({
        type: "SHOWOFF_DRAWER",
    });
};
