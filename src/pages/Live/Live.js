import SideBar from 'src/Layout/AllLayout/SideBar';
import styles from './Live.module.scss';
import { LiveRecommentVideo } from '../../components/LiveRecommentVideo';
import { LiveVideo } from './LiveVideo';
import { LiveVideoLists } from 'src/APIService/LiveVideoList/LiveVideoLists';
import { LiveVideoList } from './LiveVideoList';
import { useState } from 'react';

function Live() {
   const [currentVideo, setCurrentVideo] = useState(LiveVideoLists.topVideo[0]);

   return (
      <div className={styles.wrapper}>
         <SideBar smallSize liveAction noHoverAction className={styles.menu}></SideBar>
         <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
               <LiveVideo video={currentVideo}></LiveVideo>
               <LiveVideoList
                  data={LiveVideoLists}
                  onClick={(videoLink) => {
                     setCurrentVideo(videoLink);
                  }}
               ></LiveVideoList>
            </div>
            <LiveRecommentVideo data={LiveVideoLists}></LiveRecommentVideo>
         </div>
      </div>
   );
}

export default Live;
