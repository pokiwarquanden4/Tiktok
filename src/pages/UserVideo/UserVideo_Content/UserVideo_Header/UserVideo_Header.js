import styles from './UserVideo_Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import { MusicIconDiscover } from 'src/components/Icon';
import Image from 'components/images';
import { UserVideo_SA } from './UserVideo_SA';

function UserVideo_Header() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.userInfo}>
            <Image
               src="data:image/jpeg;base64,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"
               alt=""
               className={styles.avatar}
            ></Image>
            <div className={styles.userInfo_content}>
               <div className={styles.mainName}>
                  <div className={styles.mainName_content}>theanh28entertainment</div>
                  <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon}></FontAwesomeIcon>
               </div>
               <div className={styles.subName}>Theanh 28 Entertainment 8-17. 18h ago</div>
            </div>
            {true ? (
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
                  Hello Kitty Made By Midsfsdfsdfsdf
               </a>
            </div>
         </div>
         <UserVideo_SA></UserVideo_SA>
      </div>
   );
}

export default UserVideo_Header;
