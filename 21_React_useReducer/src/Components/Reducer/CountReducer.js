function CountReducer(state, action) {

    switch (action.type) {

        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        case 'INCBY':
            return state + action.payload;

        case 'RESET':
            return 0;

        default:
            return state;
    }
}

export default CountReducer;