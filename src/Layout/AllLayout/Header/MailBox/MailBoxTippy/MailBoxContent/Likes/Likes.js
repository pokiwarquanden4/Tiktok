import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Image from 'src/components/images';
import { faCheckCircle, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import styles from './Likes.module.scss';

function Likes({ time }) {
   const sub_Name = (value) => {
      return 'Like Your Comment. ' + value;
   };
   const message = (name, value) => {
      return name + ': ' + value;
   };
   return (
      time[1].length > 0 &&
      time[1].map((item) => {
         return (
            <Fragment key={item.key}>
               <Link to={`/@${item.nickname}`} className={styles.wrapper}>
                  <Image src={item.avatar} className={styles.image} alt={item.full_name}></Image>
                  <div className={styles.info}>
                     <h4 className={styles.main__Name}>
                        {item.last_name}
                        {item.tick && (
                           <FontAwesomeIcon className={styles.checkIcon} icon={faCheckCircle}></FontAwesomeIcon>
                        )}
                     </h4>
                     <span className={styles.sub__Name}>{sub_Name(item.startTime)}</span>
                     <span className={styles.message}>{message(item.last_name, item.responseMessage)}</span>
                  </div>
                  {item.followed && (
                     <Button primary className={styles.followBackButton}>
                        Follow Back
                     </Button>
                  )}
                  {!item.followed && (
                     <Button
                        className={styles.CurrentFollowButton}
                        leftIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}></FontAwesomeIcon>}
                     >
                        Followed
                     </Button>
                  )}
               </Link>
            </Fragment>
         );
      })
   );
}

export default Likes;
