import { useState } from 'react';
import styles from './VideoList.module.scss';
import Video from './VideoPreview/VideoPreview';
import { Grid } from 'components/Grid';

function VideoList({ data }) {
   const [currentId, setCurrentId] = useState();
   const [currentPlay, setCurrentPlay] = useState();
   return (
      <Grid className={styles.mainContent} minWidth="180px" numberColumn={6} colGap="15px" rowGap="20px">
         {data.map((item) => {
            return (
               <Video
                  data={item}
                  key={item.id}
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
               ></Video>
            );
         })}
      </Grid>
   );
}

export default VideoList;
