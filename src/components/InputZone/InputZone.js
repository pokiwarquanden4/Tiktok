import { XButton } from 'components/Icon';
import styles from './inputZone.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { useDispatch } from 'react-redux';

function InputZone({ children, childrenValue, setChildren }) {
   const dispatch = useDispatch();
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
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
                  setChildren(undefined);
                  dispatch(inputZone.hide());
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
