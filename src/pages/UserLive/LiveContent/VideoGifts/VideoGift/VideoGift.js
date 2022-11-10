import styles from './VideoGift.module.scss';

function VideoGift({ src }) {
   return (
      <div className={styles.wrapper}>
         <img src={src} className={styles.image}></img>
         <div className={styles.content}>
            <div className={styles.content_name}>Rose</div>
            <div className={styles.content_coin}>1 Coin</div>
         </div>
      </div>
   );
}

export default VideoGift;
