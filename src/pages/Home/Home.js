import styles from './Home.module.scss';
import { ListVideo } from 'src/components/ListVideo';
import { useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/users';
import { useEffect, useState } from 'react';
import { getVideosByNickNameAPI } from 'api';
import { LoadingAnimation } from 'components/LoadingAnimation';

function Home() {
   const user = useSelector(activeUserSelector);
   const [listVideo, setListVideo] = useState();

   useEffect(() => {
      getVideosByNickNameAPI(user.nickName).then((result) => {
         const arr = [];
         result.data.forEach((item) => {
            arr.push(item);
         });
         setListVideo(arr);
      });
   }, [user]);

   return (
      <div className={styles.wrapper}>
         {listVideo ? (
            listVideo.map((video) => {
               return <ListVideo key={video._id} video={video} user={user}></ListVideo>;
            })
         ) : (
            <LoadingAnimation></LoadingAnimation>
         )}
      </div>
   );
}

export default Home;
