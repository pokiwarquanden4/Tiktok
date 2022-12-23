import styles from './LoginSignUpForm.module.scss';
import { DefaultFrom } from './DefaultFrom';
import { InputZone } from 'components/InputZone';
import { useState } from 'react';
import { FaceBook, QRCode, GoogleIcon, Twitter, Line, Apple, User } from 'components/Icon';
import { SignUpUser } from 'components/LoginSignUpForm/SignUpUser';
import { LoginUser } from './LoginUser';
import { useSelector } from 'react-redux';
import { inputZoneSelector } from 'redux/selectors/inputZoneSelector';

function LoginSignUpForm() {
   let inputStatus = useSelector(inputZoneSelector);
   const [loginOrSignUp, setLoginOrSignUp] = useState('Login');
   const [childrenValue, setChildrenValue] = useState();
   const signUpForm = [
      {
         icon: <QRCode></QRCode>,
         title: 'User QR code',
         children: { data: undefined },
      },
      {
         icon: <FaceBook width="20px" height="20px"></FaceBook>,
         title: 'Continue with facebook',
         children: { data: undefined },
      },
      {
         icon: <User width="20px" height="20px"></User>,
         title: 'Use phone / email / username',
         children: { data: <SignUpUser setChildrenValue={setChildrenValue}></SignUpUser> },
      },
      {
         icon: <GoogleIcon></GoogleIcon>,
         title: 'Continue with Google',
         children: { data: undefined },
      },
      {
         icon: <Twitter width="20px" height="20px"></Twitter>,
         title: 'Continue with Twitter',
         children: { data: undefined },
      },
      {
         icon: <Line width="20px" height="20px"></Line>,
         title: 'Continue with Line',
         children: { data: undefined },
      },
      {
         icon: <Apple></Apple>,
         title: 'Continue with Apple',
         children: { data: undefined },
      },
   ];
   const loginForm = [
      {
         icon: <User width="20px" height="20px"></User>,
         title: 'Use phone / email / username',
         children: { data: <LoginUser></LoginUser> },
      },
   ];
   return (
      !inputStatus.loginSignUp && (
         <InputZone childrenValue={childrenValue} setChildren={setChildrenValue} type="loginSignUp">
            <div className={styles.wrapper}>
               {childrenValue || (
                  <DefaultFrom
                     form={loginOrSignUp === 'Login' ? loginForm : signUpForm}
                     loginOrSignUp={loginOrSignUp}
                     setLoginOrSignUp={setLoginOrSignUp}
                     setChildren={setChildrenValue}
                  ></DefaultFrom>
               )}
            </div>
         </InputZone>
      )
   );
}

export default LoginSignUpForm;
