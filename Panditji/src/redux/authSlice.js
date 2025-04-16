import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:"auth",
    initialState:{role:null,accessToken:null},
    reducers:{
        loginsuccess:(state,action)=>{
            state.role=action.payload.role,
            state.accessToken=action.payload.accessToken
        },
        logout:(state)=>{
            state.role=null,
            state.accessToken=null
        },
    },
});

export const {loginsuccess,logout}=authSlice.actions;
export default authSlice.reducer;