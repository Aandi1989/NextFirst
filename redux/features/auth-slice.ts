import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialStateType ={
    isAuth:boolean,
    userName:string,
    userId:string,
    isModerator:boolean
}
const initialState: initialStateType = {
    isAuth:false,
    userName:"",
    userId:"",
    isModerator: false
}

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout() {return initialState},
        login(state, action:PayloadAction<string>){
            state.userName = action.payload
        },
    },
})

export const {login, logout} = auth.actions;
export default auth.reducer;