import styles from './AllowUser.module.scss';

function AllowUser({ allowUser, setAllowUser }) {
   return (
      <div className={styles.allowUser}>
         <div className={styles.allowUser_header}>
            <div className={styles.allowUser_title}>Allow users to:</div>
         </div>
         <div className={styles.allowUser_body}>
            <div className={styles.tickBox_wrapper}>
               <input
                  type="checkbox"
                  id="comment"
                  className={styles.allowUser_check}
                  onChange={(e) => {
                     const value = e.target.checked;
                     if (value) {
                        setAllowUser([...allowUser, 'comment']);
                     } else {
                        const index = allowUser.indexOf('comment');
                        if (index > -1) {
                           const allowed = allowUser;
                           setAllowUser(allowed.splice(index, 1));
                        }
                     }
                  }}
               ></input>
               <label htmlFor="comment" className={styles.allowUser_label}>
                  Comment
               </label>
            </div>
            <div className={styles.tickBox_wrapper}>
               <input
                  type="checkbox"
                  id="Duet"
                  className={styles.allowUser_check}
                  onChange={(e) => {
                     const value = e.target.checked;
                     if (value) {
                        setAllowUser([...allowUser, 'duet']);
                     } else {
                        const index = allowUser.indexOf('duet');
                        if (index > -1) {
                           const allowed = allowUser;
                           setAllowUser(allowed.splice(index, 1));
                        }
                     }
                  }}
               ></input>
               <label htmlFor="Duet" className={styles.allowUser_label}>
                  Duet
               </label>
            </div>
            <div className={styles.tickBox_wrapper}>
               <input
                  type="checkbox"
                  id="Stitch"
                  className={styles.allowUser_check}
                  onChange={(e) => {
                     const value = e.target.checked;
                     if (value) {
                        setAllowUser([...allowUser, 'stitch']);
                     } else {
                        const index = allowUser.indexOf('stitch');
                        if (index > -1) {
                           const allowed = allowUser;
                           setAllowUser(allowed.splice(index, 1));
                        }
                     }
                  }}
               ></input>
               <label htmlFor="Stitch" className={styles.allowUser_label}>
                  Stitch
               </label>
            </div>
         </div>
      </div>
   );
}

export default AllowUser;
