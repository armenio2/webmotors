const initialState = {
    markSelectedID: false,
    modelSelectedID: false,
    versionSelectedID: false
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
        case 'version':
            return {
                ...state,
                versionSelectedID: action.newSelectedId
            };
        default:
            return state;
    }
}

export default MarkData;