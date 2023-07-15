import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signIn__container}>
      <h3 className={styles.signIn__title}>SignIn</h3>
        <button className={`${styles.signIn__btn} ${styles.btn}`}>SignIn with Google</button>
        <p className={styles.signIn__subtitle}>or</p>
        <form className={`${styles.signIn__form} ${styles.formSignIn}`} action="">
            <input type="text" className={styles.formSignIn__login} />
            <input type="text" className={styles.formSignIn__password} />
            <button className={`${styles.formSignIn__btn} ${styles.btn}` }>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default page;