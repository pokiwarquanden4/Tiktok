import styles from './LoginUser.module.scss';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { activeUserSelector, loginWrongSelector } from 'redux/selectors/usersSelector';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { recommendUser } from 'redux/actions/usersActions/usersActions';

function LoginUser() {
   const dispatch = useDispatch();
   const user = useSelector(activeUserSelector);
   const loginWrong = useSelector(loginWrongSelector);
   const [error, setError] = useState([true, true]);

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
   };

   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         dispatch(recommendUser.recommendUserRequest(user.nickName));
         dispatch(activeUser.activeUserFailure(null));
         dispatch(inputZone.hideLoginSignUp());
      }
   }, [user]);

   useEffect(() => {
      if (loginWrong) {
         switch (loginWrong) {
            case 'Wrong User Name':
               setError([false, true]);
               break;
            case 'Wrong PassWord':
               setError([true, false]);
               break;
            default:
               break;
         }
      }
   }, [loginWrong]);

   const handleChange = useCallback(() => {
      if (!error[0] || !error[1]) {
         setError([true, true]);
      }
   });

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
                     handleChange();
                     setNickName(e.target.value);
                  }}
               ></input>
            </div>
            {!error[0] && <div className={styles.errorMessage}>Wrong nick name</div>}
            <div className={styles.user_password}>
               <div className={styles.password_title}>Password</div>
               <input
                  type="password"
                  className={styles.password_input}
                  placeholder="Enter Password"
                  onChange={(e) => {
                     handleChange();
                     setPassword(e.target.value);
                  }}
               ></input>
            </div>
            {!error[1] && <div className={styles.errorMessage}>Wrong password</div>}
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
