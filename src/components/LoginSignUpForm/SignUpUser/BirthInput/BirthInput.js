import styles from './BirthInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from 'components/Poper';

function BirthInput({ valuer, setValuer, defaultValue, listDrop, refer, droper, setDroper }) {
   const handleDateClick = (ref, value) => {
      setValuer(value);
      ref.current.innerHTML = value;
   };

   const getCurrentMonth = (ref) => {
      if (ref.current) {
         return ref.current.innerHTML;
      }
      return false;
   };
   return (
      <div
         className={`${styles.month} ${styles.dropDown}`}
         onClick={() => {
            if (droper) {
               setDroper(false);
            } else {
               setDroper(true);
            }
         }}
      >
         <div className={styles.dropDown_value} ref={refer}>
            {defaultValue}
         </div>
         <FontAwesomeIcon
            icon={faCaretDown}
            className={`${styles.updownIcon} ${droper !== undefined && (droper ? styles.downIcon : styles.upIcon)}`}
         ></FontAwesomeIcon>
         <Wrapper className={`${styles.monthDropDown} ${!droper && styles.monthDropUp}`}>
            {listDrop.map((value) => {
               return (
                  <div className={styles.monthValues} key={value}>
                     <div
                        className={styles.monthValue}
                        onClick={() => {
                           handleDateClick(refer, value);
                        }}
                     >
                        {value}
                        {getCurrentMonth(refer) == value && (
                           <FontAwesomeIcon icon={faCheck} className={styles.tickIcon}></FontAwesomeIcon>
                        )}
                     </div>
                  </div>
               );
            })}
         </Wrapper>
      </div>
   );
}

export default BirthInput;
