const createStore = (reducer) => {
    let state;
    let subscribers = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);

        subscribers.forEach(callback => callback());
    };

    dispatch({});

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