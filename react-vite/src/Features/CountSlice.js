import { createSlice } from "@reduxjs/toolkit";

let CountSlice = createSlice({
    name:"Counter App",
    initialState:{count : 0},
    reducers: {
        increment: (state,action) => {state.count += 1},
        decrement: state => {state.count -= 1},
        incrementBy: (state,action) =>{state.count += action.payload}
    }
})

console.log(CountSlice);

export let {increment,decrement,incrementBy} = CountSlice.actions

export default CountSlice.reducer;