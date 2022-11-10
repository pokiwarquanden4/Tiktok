import styles from './LiveContent.module.scss';
import Image from 'src/components/images';
import { FollowingIcon, ThreeDotIcon } from 'components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import MONO from 'src/components/Video/MONO.mp4';
import { VideoGifts } from './VideoGifts';
import { CoinBalance } from './CoinBalance';
import { LiveRecommentVideo } from 'components/LiveRecommentVideo';
import { LiveVideoLists } from 'src/APIService/LiveVideoList/LiveVideoLists';
import { ClosingIcon } from 'components/Icon/UserLiveIcon';

function LiveContent({ fullScreen, onClick }) {
   return (
      <div className={`${styles.wrapper} ${fullScreen && styles.fullScreen}`}>
         <div className={styles.header}>
            <div className={styles.headerMain}>
               <Image src="/" alt="/" className={styles.headerMain_avatar}></Image>
               <div className={styles.headerMain_content}>
                  <div className={styles.userName}>
                     <div className={styles.userName_main}>Trần Minh Quang</div>
                     <div className={styles.userName_sub}>Naruto Sasuke</div>
                  </div>
                  <div className={styles.userSubName}>
                     <div className={styles.userSubName_content}>Sale sập tiktok Shop</div>
                     <div className={styles.viewer}>
                        <FollowingIcon className={styles.viewer_icon}></FollowingIcon>
                        <div className={styles.viewer_number}>12</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.headerSub}>
               <div className={styles.share}>
                  <FontAwesomeIcon icon={faShare} className={styles.shareIcon}></FontAwesomeIcon>
               </div>
               <div className={styles.moreOption}>
                  <ThreeDotIcon className={styles.moreOptionIcon}></ThreeDotIcon>
               </div>
               <Button primary className={styles.followButton}>
                  Follow
               </Button>
               {fullScreen && <ClosingIcon onClick={onClick} className={styles.closingIcon}></ClosingIcon>}
            </div>
         </div>
         <div className={styles.content}>
            <video src={MONO} className={styles.video}></video>
            <VideoGifts fullScreen={fullScreen}></VideoGifts>
            <CoinBalance></CoinBalance>
            <LiveRecommentVideo className={styles.liveRecommentVideo} data={LiveVideoLists}></LiveRecommentVideo>
         </div>
      </div>
   );
}

export default LiveContent;
