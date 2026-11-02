import {configureStore} from '@reduxjs/toolkit';
import CountReducer from '../Features/CountSlice'

let store = configureStore({
    reducer:{
        counter: CountReducer,
        user:CountReducer
    }
})

console.log(store);
console.log(store.getState());
export default store;