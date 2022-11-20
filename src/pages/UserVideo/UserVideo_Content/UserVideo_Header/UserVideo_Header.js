import styles from './UserVideo_Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import { MusicIconDiscover } from 'src/components/Icon';
import Image from 'components/images';
import { UserVideo_SA } from './UserVideo_SA';

function UserVideo_Header({ avatar, nickName, full_name, followed, comment, liker }) {
   return (
      <div className={styles.wrapper}>
         <div className={styles.userInfo}>
            <Image src={avatar} alt="" className={styles.avatar}></Image>
            <div className={styles.userInfo_content}>
               <div className={styles.mainName}>
                  <div className={styles.mainName_content}>{nickName}</div>
                  <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon}></FontAwesomeIcon>
               </div>
               <div className={styles.subName}>{full_name}</div>
            </div>
            {followed ? (
               <button className={styles.followButton}>Following</button>
            ) : (
               <Button follow className={styles.followedButton}>
                  Follow
               </Button>
            )}
         </div>
         <div className={styles.videoInfo}>
            <div className={styles.more_info}>
               <p className={styles.message}>Hello</p>
               <strong className={styles.hastag}>#discover</strong>
               <strong className={styles.hastag}>#discover</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
               <strong className={styles.hastag}>#discoverr</strong>
            </div>
            <div className={styles.backGround_music}>
               <MusicIconDiscover></MusicIconDiscover>
               <a href="/" className={styles.music_title}>
                  Hello Kitty
               </a>
            </div>
         </div>
         <UserVideo_SA comment={comment} liker={liker}></UserVideo_SA>
      </div>
   );
}

export default UserVideo_Header;
