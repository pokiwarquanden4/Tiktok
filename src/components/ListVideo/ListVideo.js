import styles from './ListVideo.module.scss';
import Button from 'src/components/Button';
import { MusicIconDiscover } from 'src/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import { Video } from 'components/Video';
import { useEffect, useRef, useState } from 'react';

function ListVideo({ followed }) {
   const [autoPlay, setAutoPlay] = useState(false);
   const listRef = useRef();
   useEffect(() => {
      const PlayVideo = () => {
         const windowHeight = window.innerHeight - 50;
         const reviewTop = listRef.current.getBoundingClientRect().top - 60;
         const reviewBottom = listRef.current.getBoundingClientRect().bottom - 60;
         const componentHeight = reviewBottom - reviewTop;
         if (windowHeight - reviewTop > componentHeight / 2 && reviewTop > -(componentHeight / 2)) {
            setAutoPlay(true);
         } else {
            setAutoPlay(false);
         }
      };

      PlayVideo();

      window.addEventListener('scroll', PlayVideo);

      return () => {
         window.removeEventListener('scroll', PlayVideo);
      };
   }, []);

   return (
      <div ref={listRef} className={styles.lists}>
         <Image src="/" className={styles.avatar} alt="fullname"></Image>

         <div className={styles.main}>
            <div className={styles.content}>
               <div className={styles.contentTitle}>
                  <div className={styles.name_info}>
                     <div className={styles.main_Name}>Quang</div>
                     <div className={styles.sub_Name}>TMQ</div>
                     <FontAwesomeIcon className={styles.check} icon={faCheckCircle}></FontAwesomeIcon>
                  </div>
                  <div className={styles.more_info}>
                     <p className={styles.message}>Hello</p>
                     <strong className={styles.hastag}>#discover</strong>
                     <strong className={styles.hastag}>#discover</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                     <strong className={styles.hastag}>#discoverr</strong>
                  </div>
                  <div className={styles.backGround_music}>
                     <MusicIconDiscover></MusicIconDiscover>
                     <a href="/" className={styles.music_title}>
                        Hello Kitty
                     </a>
                  </div>
               </div>
               {!followed && (
                  <Button follow className={styles.button}>
                     Follow
                  </Button>
               )}
            </div>
            <div className={`${styles.video_Wrapper} ${styles.smallVideo}`}>
               <Video smallVideo autoPlay={autoPlay}></Video>
               <div className={styles.userAction}>
                  <div className={styles.userHeart}>
                     <FontAwesomeIcon className={styles.heartIcon} icon={faHeart}></FontAwesomeIcon>
                     <strong className={styles.numberHeart}>100k</strong>
                  </div>
                  <div className={styles.userComment}>
                     <FontAwesomeIcon className={styles.commentIcon} icon={faCommentDots}></FontAwesomeIcon>
                     <strong className={styles.numberComment}>99k</strong>
                  </div>
                  <div className={styles.userShare}>
                     <FontAwesomeIcon className={styles.shareIcon} icon={faShare}></FontAwesomeIcon>
                     <strong className={styles.numberShare}>10</strong>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ListVideo;
