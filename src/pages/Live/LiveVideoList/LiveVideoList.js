import { useState } from 'react';
import { ConvertImage } from '../ConvertImage';
import styles from './LiveVideoList.module.scss';

function LiveVideoList({ data, onClick }) {
   const [currentVideo, setCurrentVideo] = useState(1);

   return (
      <div className={styles.videoList}>
         <div className={styles.videoList_item}>
            {data.topVideo.map((video) => {
               return (
                  <div
                     className={styles.video_wrapper}
                     key={video.id}
                     onClick={() => {
                        onClick(video);
                        setCurrentVideo(video.id);
                     }}
                  >
                     <div className={styles.video_title}>{video.content}</div>
                     <ConvertImage
                        src={video.img}
                        className={`${styles.video} ${currentVideo === video.id && styles.focus}`}
                     ></ConvertImage>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default LiveVideoList;
