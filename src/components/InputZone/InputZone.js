import { XButton } from 'components/Icon';
import styles from './inputZone.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { useDispatch } from 'react-redux';
import { activeUser } from 'redux/actions/usersActions/usersActions';

function InputZone({ children, childrenValue, setChildren, width, height, type }) {
   const dispatch = useDispatch();
   return (
      <div className={styles.wrapper}>
         <div className={styles.content} style={{ width: width, height: height }}>
            {childrenValue && (
               <div
                  className={styles.backButton}
                  onClick={() => {
                     setChildren(undefined);
                  }}
               >
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
               </div>
            )}

            <div
               className={styles.exitButton}
               onClick={() => {
                  switch (type) {
                     case 'loginSignUp':
                        setChildren(undefined);
                        dispatch(activeUser.activeUserFailure(null));
                        dispatch(inputZone.hideLoginSignUp());
                        break;
                     case 'editProfile':
                        dispatch(inputZone.hideEditUser());
                        break;
                     case 'comingSoon':
                        dispatch(inputZone.hideComingSoon());
                        break;
                     default:
                        break;
                  }
               }}
            >
               <XButton blackColor className={styles.exit} width="17px" height="17px"></XButton>
            </div>
            {children}
         </div>
      </div>
   );
}

export default InputZone;
