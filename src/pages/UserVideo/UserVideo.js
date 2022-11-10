import styles from './UserVideo.module.scss';
import { UserVideo_Content } from './UserVideo_Content';
import { UserVideo_Video } from './UserVideo_Video';
import LTKH from 'src/components/Video/LTKH.mp4';
import Video from 'src/components/Video/LightVideo.mp4';

function UserVideo() {
   return (
      <div className={styles.wrapper}>
         <UserVideo_Video></UserVideo_Video>
         <UserVideo_Content></UserVideo_Content>
      </div>
   );
}

export default UserVideo;
