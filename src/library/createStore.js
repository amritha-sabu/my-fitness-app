const createStore = (initialState, reducer) => {
    let state = initialState;
    let subscribers = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);

        subscribers.forEach(callback => callback());
    };

    const subscribe = (callback) => {
        subscribers.push(callback);
    };

    return {
        getState,
        dispatch,
        subscribe,
    }
};

export default createStore;