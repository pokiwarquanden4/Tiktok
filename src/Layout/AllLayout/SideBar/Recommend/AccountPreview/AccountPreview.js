import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from 'src/components/Poper';
import Image from '../../../../../components/images';
import Button from '../../../../../components/Button';
import { userAvatar } from 'api';
import PropTypes from 'prop-types';

function AccountPreview({ data }) {
   const getAvatar = (user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.nickName + '/' + user.avatar);
   };

   return (
      <div className={styles.recommentTippy}>
         <Wrapper className={styles.wrapper}>
            <div className={styles.tippyHeader}>
               <Image src={getAvatar(data)} alt={data.full_name}></Image>
               <Button className={styles.tippyButton} primary>
                  Follow
               </Button>
            </div>
            <div className={styles.tippyContent}>
               <h4 className={styles.tippy_main__Name}>
                  {data.last_name}
                  {data.tick && (
                     <FontAwesomeIcon className={styles.tippy_checkIcon} icon={faCheckCircle}></FontAwesomeIcon>
                  )}
               </h4>
               <span className={styles.tippy_sub__Name}>{data.full_name}</span>
            </div>
            <div className={styles.tippyFollow}>
               <div className={styles.tippy_follow}>
                  <strong className={styles.tippy_number_follow}>{data.following}</strong>
                  <p className={styles.tippy_follower}>Followers</p>
               </div>
               <div className={styles.tippy_like}>
                  <strong className={styles.tippy_number_like}>{data.likes}</strong>
                  <p className={styles.tippy_liker}>Likes</p>
               </div>
            </div>
         </Wrapper>
      </div>
   );
}

AccountPreview.propTypes = {
   data: PropTypes.object.isRequired,
};

export default AccountPreview;
