import createStore from "./library/createStore";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default store;