
export const onDropdown = (dispatch, dropName) => {
    return dispatch({
        type: "SHOWON_DROPDOWN_" + dropName

    });
};

export const offDropdown = (dispatch, dropName) => {
    return dispatch({
        type: "SHOWOFF_DROPDOWN_" + dropName
    });
};
