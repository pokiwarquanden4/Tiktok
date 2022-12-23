import styles from './LiveVideo.module.scss';
import Image from 'src/components/images';
import { FollowingIcon } from 'components/Icon';
import { useDispatch } from 'react-redux';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
function LiveVideo({ video }) {
   const dispatch = useDispatch()

   return (
      <div className={styles.wrapper}>
         <div className={styles.videoWrapper}>
            <video className={styles.video} src={video.video}></video>
         </div>
         <div className={styles.videoInfo}>
            <Image src="/" className={styles.avatar} alt="fullname"></Image>
            <div className={styles.name}>
               <div className={styles.name_main}>{video.userName}</div>
               <div className={styles.name_sub}>{video.userSubName}</div>
            </div>
            <div className={styles.live}>
               <div className={styles.viewer}>
                  <FollowingIcon className={styles.doubleUserIcon}></FollowingIcon>
                  <div className={styles.viewerNumber}>{video.viewer}</div>
               </div>
               <div className={styles.liveStatus}>LIVE</div>
            </div>
         </div>
         <div className={styles.watchLiveButton} 
         onClick={()=>{
            dispatch(inputZone.showComingSoon())
         }}>Watch LIVE</div>
      </div>
   );
}

export default LiveVideo;
