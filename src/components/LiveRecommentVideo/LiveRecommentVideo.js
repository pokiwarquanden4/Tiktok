import { Grid } from 'components/Grid';
import styles from './LiveRecommentVideo.module.scss';
import { ConvertImage } from '../../pages/Live/ConvertImage';
import { memo } from 'react';
import { Link } from 'react-router-dom';

function LiveRecommentVideo({ data, className }) {
   const classes = `${styles.wrapper} ${className && ([styles.className] = className)}`;

   return (
      <div className={classes}>
         <div className={styles.header}>
            <div className={styles.main_title}>Recommended LIVE videos</div>
         </div>
         <Grid className={styles.video_wrapper} minWidth="275px" numberColumn={4} colGap="24px" rowGap="24px">
            {data.allVideo.map((video) => {
               return (
                  <Link to={`/@${video.userName}/live`} key={video.id} className={styles.videos}>
                     <ConvertImage src={video.img} className={styles.video}></ConvertImage>
                     <div className={styles.viewer}>{video.viewer} viewers</div>
                     <div className={styles.currentStatus}>LIVE</div>
                     <div className={styles.playVideo}></div>
                  </Link>
               );
            })}
         </Grid>
      </div>
   );
}

export default memo(LiveRecommentVideo);
