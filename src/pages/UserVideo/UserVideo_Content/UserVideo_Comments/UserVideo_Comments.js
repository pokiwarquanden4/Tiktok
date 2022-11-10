import styles from './UserVideo_Comments.module.scss';
import UserVideo_Comment from './UserVideo_Comment/UserVideo_Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';
function UserVideo_Comments() {
   const [currentShow, setCurrentShow] = useState(0);

   return (
      <div className={styles.wrapper}>
         <UserVideo_Comment></UserVideo_Comment>
         {!currentShow ? (
            <div
               className={styles.responses}
               onClick={() => {
                  setCurrentShow(currentShow + 3);
               }}
            >
               <div className={styles.responses_expan}>View more replies (322)</div>
               <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
            </div>
         ) : (
            <Fragment>
               <UserVideo_Comment notHost={true}></UserVideo_Comment>
               <UserVideo_Comment notHost={true}></UserVideo_Comment>
               <div className={styles.viewMore_wrapper}>
                  <div className={styles.viewMore}>
                     <div className={styles.viewMore_content}>View more</div>
                     <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
                  </div>
                  <div
                     className={styles.hide}
                     onClick={() => {
                        setCurrentShow(0);
                     }}
                  >
                     <div className={styles.hide_content}>Hide</div>
                     <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
                  </div>
               </div>
            </Fragment>
         )}
      </div>
   );
}

export default UserVideo_Comments;
