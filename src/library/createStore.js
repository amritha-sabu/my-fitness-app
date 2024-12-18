const createStore = (initialState) => {
    let state = initialState;

    const getState = () => {
        return state;
    };

    return {
        getState,
    }
};

export default createStore;