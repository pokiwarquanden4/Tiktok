import { useEffect, useState } from 'react';
import styles from './VideoList.module.scss';
import VideoPreview from './VideoPreview/VideoPreview';
import { Grid } from 'components/Grid';
import { getVideosByNickNameAPI } from 'api';
import { LoadingAnimation } from 'components/LoadingAnimation';

function VideoList({ nickName }) {
   const [listVideo, setListVideo] = useState();
   const [currentId, setCurrentId] = useState();
   const [currentPlay, setCurrentPlay] = useState();

   useEffect(() => {
      getVideosByNickNameAPI(nickName).then((result) => {
         setListVideo(result.data);
      });
   }, []);
   return (
      <Grid className={styles.mainContent} minWidth="180px" numberColumn={6} colGap="15px" rowGap="20px">
         {listVideo ? (
            listVideo.map((item) => {
               return (
                  <VideoPreview
                     data={item}
                     key={item._id}
                     currentId={currentId}
                     startCurrentPlay={(ref, id) => {
                        setCurrentPlay(ref);
                        setCurrentId(id);
                        ref.current.play();
                     }}
                     stopCurrentPlay={(ref) => {
                        try {
                           if (ref !== currentPlay) {
                              currentPlay.current.load();
                           }
                        } catch (err) {
                           //Do nothing
                        }
                     }}
                  ></VideoPreview>
               );
            })
         ) : (
            <LoadingAnimation></LoadingAnimation>
         )}
      </Grid>
   );
}

export default VideoList;
