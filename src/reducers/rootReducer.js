import combineReducers from "../library/combineReducer";
import workoutReducer from "./addWorkoutReducer";
import goalsReducer from "./addGoalsReducer";
import filterReducer from "./changeFilterReducer";
import progressReducer from "./progressReducer";

const reducerMappings = {
    "workout": workoutReducer,
    "goals": goalsReducer,
    "filter": filterReducer,
    "progress": progressReducer,
};

const rootReducer = combineReducers(reducerMappings);

export default rootReducer;