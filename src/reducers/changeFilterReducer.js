const INITIAL_STATE = {
    workoutFilter : 'All',
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_FILTER':
        return {
            ...state,
            workoutFilter: action.payload,
        }
        default: return state;
    }
};

export default filterReducer;