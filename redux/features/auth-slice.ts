import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialStateType ={
    isAuth:boolean,
    userName:string,
    userId:string,
    isModerator:boolean,
    users:UserType[]
}
export type UserType = {
    id:number,
    name:string,
    email:string
}
const initialState: initialStateType = {
    isAuth:false,
    userName:"",
    userId:"",
    isModerator: false,
    users:[]
}

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout() {return initialState},
        login(state, action:PayloadAction<string>){
            state.userName = action.payload
        },
        setUsers(state,action:PayloadAction<UserType[]>){
            state.users = action.payload
        }
    },
})

export const {login, logout, setUsers} = auth.actions;
export default auth.reducer;