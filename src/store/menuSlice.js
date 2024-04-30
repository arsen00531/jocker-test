import { createSlice } from "@reduxjs/toolkit";
const menuSlice = createSlice ( {
    name : 'menuSlice',
    initialState : {
        value : false
    },
    reducers : {
        changeMenuActive(state, action) {
                state.value = action.payload
        }
    }

})
export const {changeMenuActive} = menuSlice.actions;
export default menuSlice.reducer