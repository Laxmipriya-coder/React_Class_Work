let initialState = { count: 0, likes: 10 }
function countReducer(state = { initialState }, action) {
    console.log('reducer for counter');
    switch(action.type){
        case 'INC' :
            return {...state,
                count: state.count + 1
            }
        default:
            return state
    }
    return state;
}
export default countReducer;