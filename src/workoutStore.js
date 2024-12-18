import createStore from "./library/createStore";
import rootReducer from "./reducers/rootReducer";
// import { ADD_WORKOUT, SET_GOALS, WORKOUT_FILTER } from "./actions/type";

// const initialState = {
//     workouts : [],
//     goals : {
//         distance: 100,
//         weightLoss: 5,
//     },
//     progress : {
//         distanceCovered: 0,
//         weightLost: 0,
//     },
//     workoutFilter : 'All',
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case ADD_WORKOUT:
//         return {
//             ...state,
//             workouts: [...state.workouts, action.payload],
//         }
//         case SET_GOALS:
//         return {
//             ...state,
//             goals : {...state.goals, ...action.payload}
//         }
//         case WORKOUT_FILTER:
//         return{
//             ...state,
//             workoutFilter : action.payload,
//         }
//         default : return state;
//     }
// };

const store = createStore(rootReducer);

export default store;