import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        clearAllUsers(state){
            state.splice(0,state.length);
        }
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.clearAllUsers,()=>{
            return [];
        })
    }
});

export default userSlice.reducer;

export const {addUser,removeUser,clearAllUsers} = userSlice.actions;