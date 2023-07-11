import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const adminSlice = createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return [];
        })
    }
});

export default adminSlice.reducer;

export const {addUser,removeUser} = adminSlice.actions;