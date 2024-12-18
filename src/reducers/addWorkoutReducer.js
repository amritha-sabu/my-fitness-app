const INITIAL_STATE = {
    workouts : [],
};
const workoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
        return {
            ...state,
            workouts: [...state.workouts, action.payload],
        }
        default: return state;
    };
};

export default workoutReducer;