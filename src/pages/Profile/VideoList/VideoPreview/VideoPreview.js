import { useEffect, useRef } from 'react';
import styles from './VideoPreview.module.scss';

function Video({ data, startCurrentPlay, currentId, stopCurrentPlay }) {
   const videoRef = useRef();
   return (
      <div className={styles.videoWrapper}>
         {true ? (
            <video
               ref={videoRef}
               className={styles.video}
               src={data.link}
               poster={data.img}
               loop
               muted
               onMouseOver={() => {
                  startCurrentPlay(videoRef, data.id);
                  stopCurrentPlay(videoRef);
               }}
            ></video>
         ) : (
            <image src={data.img} className={styles.img}></image>
         )}
         <div className={styles.videoContent}>{data.content}</div>
      </div>
   );
}

export default Video;
