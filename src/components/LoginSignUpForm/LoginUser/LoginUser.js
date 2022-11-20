import styles from './LoginUser.module.scss';
import Button from 'components/Button';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { activeUserSelector } from 'redux/selectors/users';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { setActiveAccount } from 'api';

function LoginUser() {
   const dispatch = useDispatch();
   const user = useSelector(activeUserSelector);
   const [error, setError] = useState(false);

   const [nickName, setNickName] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = () => {
      dispatch(
         activeUser.activeUserRequest({
            nickName: nickName,
            password: password,
            active: true,
         }),
      );

      localStorage.setItem('nickName', nickName);

      setActiveAccount({
         nickName: nickName,
         password: password,
         active: true,
      });
      dispatch(inputZone.hide());
   };

   useEffect(() => {
      if (user && Object.keys(user).length === 0) {
      }
   }, [user]);

   const handleError = () => {
      if (!user) {
         setError(true);
      }
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.header}>Sign in</div>
         <div className={styles.user}>
            <div className={styles.user_nickName}>
               <div className={styles.nickName_title}>Nick Name</div>
               <input
                  className={styles.nickName_input}
                  placeholder="Enter Nick Name"
                  onChange={(e) => {
                     if (error) {
                        setError(false);
                     }
                     setNickName(e.target.value);
                  }}
               ></input>
            </div>
            <div className={styles.user_password}>
               <div className={styles.password_title}>Password</div>
               <input
                  type="password"
                  className={styles.password_input}
                  placeholder="Enter Password"
                  onChange={(e) => {
                     if (error) {
                        setError(false);
                     }
                     setPassword(e.target.value);
                  }}
               ></input>
            </div>
            {error && <div className={styles.errorMessage}>Something when wrong !</div>}
            <div className={styles.login}>
               <Button primary className={styles.loginButton} onClick={handleLogin}>
                  Login
               </Button>
            </div>
         </div>
      </div>
   );
}

export default LoginUser;
