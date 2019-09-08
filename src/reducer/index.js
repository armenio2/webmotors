const initialState = {
    markSelectedID: false,
    modelSelectedID: false
};

function MarkData(state = initialState, action) {
    switch (action.type) {
        case 'mark':
            return {
                ...state,
                markSelectedID: action.newSelectedId
            };
        case 'model':
            return {
                ...state,
                modelSelectedID: action.newSelectedId
            };
        default:
            return state;
    }
}

export default MarkData;