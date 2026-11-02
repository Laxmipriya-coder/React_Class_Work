import {createStore} from 'redux';
import countReducer from '../Reducers/CountReducer';
const store = createStore(countReducer);

console.log(store);
console.log(store.getState());

export default store;
