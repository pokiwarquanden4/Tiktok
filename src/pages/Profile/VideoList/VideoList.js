import { useEffect, useState } from 'react';
import styles from './VideoList.module.scss';
import VideoPreview from './VideoPreview/VideoPreview';
import { Grid } from 'components/Grid';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';
import { LoadingAnimation } from 'components/LoadingAnimation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { videoSelector } from 'redux/selectors/videoSelector';
import { getVideosByNickNameAPI } from 'api';

function VideoList({ nickName }) {
   const dispatch = useDispatch();
   const videos = useSelector(videoSelector);

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
