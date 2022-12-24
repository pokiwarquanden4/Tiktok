import styles from './Home.module.scss';
import { ListVideo } from 'src/components/ListVideo';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingAnimation } from 'components/LoadingAnimation';
import { videoSelector } from 'redux/selectors/videoSelector';
import { useEffect, useRef, useState } from 'react';
import { lazyLoadingSelector } from 'redux/selectors/lazyLoadingSelector';
import { lazyLoadingActions } from 'redux/actions/LazyLoading/LazyLoadingActions';
import { activeUserSelector } from 'redux/selectors/usersSelector';

function Home() {
   const dispatch = useDispatch();
   const videos = useSelector(videoSelector);
   const lazyLoadVideos = useSelector(lazyLoadingSelector);
   const user = useSelector(activeUserSelector);
   const [numberList, setNumberList] = useState();
   const [videoLists, setVideoLists] = useState(null);
   useEffect(() => {
      //Suffer random Array
      for (var i = videos.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp = videos[i];
         videos[i] = videos[j];
         videos[j] = temp;
      }

      if (videos.length !== 0) {
         let count = 0;
         let value = [];
         let videoList = [];
         for (let i = 0; i < videos.length; i++) {
            if (count < 10) {
               count++;
               value.push(videos[i]);
            }
            if (count === 10) {
               videoList.push(value);
               value = [];
               count = 0;
            }
            if (i === videos.length - 1 && value.length !== 0) {
               videoList.push(value);
               value = [];
               count = 0;
            }
         }
         setVideoLists(videoList);
      }
   }, [videos]);

   useEffect(() => {
      if (videoLists) {
         dispatch(lazyLoadingActions.setMaxVideo(videoLists.length));
      }
   }, [videoLists]);

   useEffect(() => {
      let pending = false;
      const addVideo = () => {
         if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !lazyLoadVideos.pending) {
            pending = true;
         }
      };
      setInterval(() => {
         if (pending && lazyLoadVideos.currentVideo < lazyLoadVideos.maxVideo) {
            pending = false;
            dispatch(lazyLoadingActions.increaseVideoRequest());
         }
      }, 1000);
      window.addEventListener('scroll', addVideo);
      return () => {
         window.removeEventListener('scroll', addVideo);
      };
   }, [lazyLoadVideos]);

   useEffect(() => {
      if (lazyLoadVideos.currentVideo !== 0) {
         const newList = Array.from({ length: lazyLoadVideos.currentVideo }, (_, i) => i);
         setNumberList(newList);
      }
   }, [lazyLoadVideos]);

   return (
      <div className={styles.wrapper}>
         {Object.keys(user).length !== 0 ? (
            videoLists ? (
               numberList.map((number) => {
                  return videoLists[number].map((video, index) => {
                     return <ListVideo video={video} key={video._id} index={index}></ListVideo>;
                  });
               })
            ) : (
               <LoadingAnimation></LoadingAnimation>
            )
         ) : (
            <div>
               You Haven't login yet. You can use nickName: pokiwarquanden4, password: 12345 or create your new account
            </div>
         )}
      </div>
   );
}

export default Home;
