import styles from './Following.module.scss';
import { ListVideo } from 'src/components/ListVideo';
import { useSelector } from 'react-redux';
import { LoadingAnimation } from 'components/LoadingAnimation';
import { videoSelector } from 'redux/selectors/videoSelector';

function Following() {
   const videos = useSelector(videoSelector);

   return (
      <div className={styles.wrapper}>
         {videos ? (
            videos.map((video) => {
               return <ListVideo key={video._id} video={video} followed></ListVideo>;
            })
         ) : (
            <LoadingAnimation></LoadingAnimation>
         )}
      </div>
   );
}

export default Following;
