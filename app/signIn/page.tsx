"use client"

import { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { login, logout } from "../../redux/features/auth-slice";
import {useDispatch} from "react-redux";
import { AppDispatch, useAppSelector } from '@/redux/store';

const page = () => {

  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const {userName} = useAppSelector((state) => state.authReducer)
  const onGoogleClick = () => { };
  const onSignInClick = () => { 
    dispatch(login(name))
  };
  const onLoginInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };
  console.log(userName)


  return (
    <div className={styles.signIn}>
      <div className={styles.signIn__container}>
        <h3 className={styles.signIn__title}>Sign In</h3>
        <button className={`${styles.signIn__btn} ${styles.btn}`}>SignIn with Google</button>
        <p className={styles.signIn__subtitle}>or</p>
        <div className={`${styles.signIn__form} ${styles.formSignIn}`} >
          <input type="text" onChange={onLoginInputHandler} className={styles.formSignIn__login} />
          <input type="text" className={styles.formSignIn__password} />
          <button onClick={onSignInClick} className={`${styles.formSignIn__btn} ${styles.btn}`}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default page;