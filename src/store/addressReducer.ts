import {createSlice} from "@reduxjs/toolkit";
import {IData} from "../utils/types.ts";

const initialState:IData = {
    data: []
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setListData(state, action) {
            state.data = action.payload
        }
    }
})
const addressReducer = addressSlice.reducer
const {setListData} = addressSlice.actions
export {addressReducer,setListData}