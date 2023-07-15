"use client"

import { ChangeEvent, useState } from 'react';
import '../styles/globals.scss'
import { login, logout } from "../../redux/features/auth-slice";
import {useDispatch} from "react-redux";
import { AppDispatch, useAppSelector } from '@/redux/store';
import {fetchUsers} from '../../services/getUsers'

const page = () => {

  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const {userName , users} = useAppSelector((state) => state.authReducer)
  const onGoogleClick = () => { 
    dispatch(fetchUsers())
  };
  const onSignInClick = () => { 
    dispatch(login(name))
  };
  const onLoginInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };
  console.log(userName, users)


  return (
    <div className="signIn">
      <div className="signIn__container">
        <h3 className="signIn__title">Sign In</h3>
        <button onClick={onGoogleClick} className="signIn__btn btn">SignIn with Google</button>
        <p className="signIn__subtitle">or</p>
        <div className="signIn__form formSignIn" >
          <input type="text" onChange={onLoginInputHandler} className="formSignIn__login" />
          <input type="text" className="formSignIn__password" />
          <button onClick={onSignInClick} className="formSignIn__btn btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default page;