import styles from './SignUpUser.module.scss';
import { BirthInput } from './BirthInput';
import { useRef, useState } from 'react';
import { UserInput } from './UserIput';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/actions/usersActions/usersActions';
import { useSelector } from 'react-redux';
import { allUserSelector } from 'redux/selectors/users';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

function LoginUser({ setChildrenValue }) {
   const allUsers = useSelector(allUserSelector);

   const monthRef = useRef();
   const [monthValue, setMonthValue] = useState(undefined);
   const [monthDrop, setMonthDrop] = useState(undefined);

   const dayRef = useRef();
   const [dayValue, setDayValue] = useState(undefined);
   const [dayDrop, setDayDrop] = useState(undefined);

   const yearRef = useRef();
   const [yearValue, setYearValue] = useState(undefined);
   const [yearDrop, setYearDrop] = useState(undefined);

   const dispatch = useDispatch();
   const fullNameRef = useRef();

   const lastNameRef = useRef();

   const nickNameRef = useRef();
   const [nickNameCheck, setNickNameCheck] = useState(false);

   const passwordRef = useRef();

   const avatarRef = useRef();

   const allMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   const dateOfMonth = {
      January: 31,
      February: 29,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31,
   };
   const getDayOfMonth = (month) => {
      switch (month) {
         case 'January':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'February':
            return Array.from({ length: 29 }, (_, i) => i + 1);
         case 'March':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'April':
            return Array.from({ length: 30 }, (_, i) => i + 1);
         case 'May':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'June':
            return Array.from({ length: 30 }, (_, i) => i + 1);
         case 'July':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'August':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'September':
            return Array.from({ length: 30 }, (_, i) => i + 1);
         case 'October':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         case 'November':
            return Array.from({ length: 30 }, (_, i) => i + 1);
         case 'December':
            return Array.from({ length: 31 }, (_, i) => i + 1);
         default:
            return Array.from({ length: 29 }, (_, i) => i + 1);
      }
   };
   const year = Array.from({ length: 120 }, (_, i) => i + 1910);

   const handleSubmit = async () => {
      if (allUsers.find((user) => nickNameRef.current.value === user.nickName)) {
         //Failure
         setNickNameCheck(true);
         return;
      } else {
         setNickNameCheck(false);
      }

      const formData = new FormData();
      formData.append('nickName', nickNameRef.current.value);
      formData.append('avatar', avatarRef.current.files[0]);
      formData.append('full_name', fullNameRef.current.value);
      formData.append('last_name', lastNameRef.current.value);
      formData.append('password', passwordRef.current.value);
      formData.append('dateOfBirth', dayValue + '/' + monthValue + '/' + yearValue);

      dispatch(createUser.createUserRequest(formData));

      setChildrenValue(undefined);
      dispatch(inputZone.hide());
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.header}>Sign in</div>
         <div className={styles.content}>
            <div className={styles.dateOfBirth}>
               <div className={styles.dateOfBirth_header}>When's your birthday?</div>
               <div className={styles.dateOfBirth_content}>
                  <BirthInput
                     defaultValue="Month"
                     valuer={monthValue}
                     setValuer={setMonthValue}
                     listDrop={allMonths}
                     refer={monthRef}
                     droper={monthDrop}
                     setDroper={setMonthDrop}
                  ></BirthInput>
                  <BirthInput
                     defaultValue="Day"
                     valuer={dayValue}
                     setValuer={setDayValue}
                     listDrop={getDayOfMonth(monthValue)}
                     refer={dayRef}
                     droper={dayDrop}
                     setDroper={setDayDrop}
                  ></BirthInput>
                  <BirthInput
                     defaultValue="Year"
                     valuer={yearValue}
                     setValuer={setYearValue}
                     listDrop={year}
                     refer={yearRef}
                     droper={yearDrop}
                     setDroper={setYearDrop}
                  ></BirthInput>
               </div>
               <div className={styles.dateOfBirth_subTile}>Your birthday won't be shown publicly.</div>
            </div>
            <div className={styles.user}>
               <UserInput
                  fullNameRef={fullNameRef}
                  lastNameRef={lastNameRef}
                  nickNameRef={nickNameRef}
                  nickNameCheck={nickNameCheck}
                  passwordRef={passwordRef}
                  avatarRef={avatarRef}
               ></UserInput>
            </div>
            <div className={styles.buttonWrapper}>
               <Button className={styles.submitButton} primary onClick={handleSubmit}>
                  Submit
               </Button>
            </div>
         </div>
      </div>
   );
}

export default LoginUser;
