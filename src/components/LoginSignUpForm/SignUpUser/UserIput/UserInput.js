import styles from './UserInput.module.scss';

function UserInput({ fullNameRef, lastNameRef, nickNameCheck, nickNameRef, passwordRef, avatarRef }) {
   return (
      <div className={styles.wrapper}>
         <div className={styles.user}>
            <div className={styles.name}>
               <div className={styles.user_fullName}>
                  <div className={styles.fullName_title}>Full Name</div>
                  <input className={styles.fullName_input} placeholder="Enter Here" ref={fullNameRef}></input>
               </div>
               <div className={styles.user_lastName}>
                  <div className={styles.lastName_title}>Last Name</div>
                  <input className={styles.lastName_input} placeholder="Enter Here" ref={lastNameRef}></input>
               </div>
            </div>
            <div className={styles.user_nickName}>
               <div className={styles.nickName_title}>Nick Name</div>
               <input className={styles.nickName_input} placeholder="Enter Nick Name" ref={nickNameRef}></input>
               {nickNameCheck && <div className={styles.nickName_announcement}>Account name exist</div>}
            </div>
            <div className={styles.user_password}>
               <div className={styles.password_title}>Password</div>
               <input
                  type="password"
                  className={styles.password_input}
                  placeholder="Enter Password"
                  ref={passwordRef}
               ></input>
            </div>
            <div className={styles.user_avatar}>
               <div className={styles.avatar_title}>Avatar (png file)</div>
               <input className={styles.avatar_input} type="file" accept="image/png, image/jpg" ref={avatarRef}></input>
            </div>
         </div>
      </div>
   );
}

export default UserInput;
