const defaultState = {
    data: [],
    dataModal: null,
    viewModal: false
}

const reducer = (state = defaultState, { type, payload }) => {
    const options = {
        TASK_FETCH: { ...state, data: payload },
        TASK_SET_DATA_MODAL: { ...state, dataModal: payload },
        TASK_SET_VIEW_MODAL: { ...state, viewModal: payload },
        default: state     
    }

 
    return options[type] || options.default;
}

export default reducer;