import { Fragment } from 'react';
import styles from './DefaultFrom.module.scss';

function DefaultFrom({ form, setChildren, setLoginOrSignUp, loginOrSignUp }) {
   return (
      <Fragment>
         <div className={styles.header}>{loginOrSignUp === 'Login' ? 'Log in to Tiktok' : 'Sign up for Tiktok'} </div>
         <div className={styles.content}>
            {form.map((item) => {
               return (
                  <div
                     key={item.title}
                     className={styles.login}
                     onClick={() => {
                        setChildren(item.children.data);
                     }}
                  >
                     <div className={styles.icon}>{item.icon}</div>
                     <div className={styles.title}>{item.title}</div>
                  </div>
               );
            })}
         </div>
         <div className={styles.signIn}>
            {loginOrSignUp === 'Login' ? 'Don’t have an account?' : 'Already have an account?'}
            <span
               className={styles.signUp}
               onClick={() => {
                  if (loginOrSignUp === 'Login') {
                     setLoginOrSignUp('Sign up');
                  } else {
                     setLoginOrSignUp('Login');
                  }
               }}
            >
               {loginOrSignUp === 'Login' ? 'Sign up' : 'Login'}
            </span>
         </div>
         ;
      </Fragment>
   );
}

export default DefaultFrom;
