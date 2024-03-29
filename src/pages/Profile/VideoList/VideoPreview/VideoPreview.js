import { useCallback, useRef } from 'react';
import styles from './VideoPreview.module.scss';
import { userVideoLink } from 'api';

function VideoPreview({ data, startCurrentPlay, currentId, stopCurrentPlay }) {
   const getVideoLink = useCallback((name) => {
      return userVideoLink(data.nickName + '/MainVideo/' + name);
   });

   const videoRef = useRef();
   return (
      <div className={styles.videoWrapper}>
         {true ? (
            <div
               className={styles.videoResize}
               onMouseOver={() => {
                  startCurrentPlay(videoRef, data.id);
                  stopCurrentPlay(videoRef);
               }}
            >
               <video
                  ref={videoRef}
                  className={styles.video}
                  src={getVideoLink(data.video)}
                  poster={data.img}
                  loop
                  muted
               ></video>
            </div>
         ) : (
            <image src={data.img} className={styles.img}></image>
         )}
         <div className={styles.videoContent}>{data.content}</div>
      </div>
   );
}

export default VideoPreview;
