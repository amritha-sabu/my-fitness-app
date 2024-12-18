import createStore from "./library/createStore";

const initialState = {
    workouts : [],
};

const store = createStore(initialState);

export default store;