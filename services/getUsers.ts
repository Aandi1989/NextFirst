import { UserType, setUsers } from "@/redux/features/auth-slice";
import { AppDispatch } from "@/redux/store";
import axios from "axios";


export const fetchUsers = () => async(dispatch:AppDispatch) => {
    try{
        const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(setUsers(response.data))
    }catch(e:any){
        console.log(e.message)
    }
}