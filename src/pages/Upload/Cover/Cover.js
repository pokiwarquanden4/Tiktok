import styles from './Cover.module.scss';
import { Video } from 'components/Video';
import { Fragment, useEffect, useRef, useState } from 'react';

function Cover({ videoLink, coverPic, setCoverPic }) {
   const videoRef = useRef();
   const rangerRef = useRef();
   const videoSlider = useRef();
   const [backGroundPic, setBackGroundPic] = useState();

   useEffect(() => {
      if (videoLink) {
         videoRef.current.onloadedmetadata = () => {
            const video = videoRef.current;
            const duration = video.duration;
            const gap = duration / 8;
            const results = [];
            for (let i = gap; i <= duration; i = i + gap) {
               results.push(videoLink + '#t=' + Math.floor(i));
            }
            setBackGroundPic(results);
            const input = () => {
               const rangeValue = rangerRef.current.value;
               video.currentTime = (rangeValue / 100) * duration;
               setCoverPic(Math.floor((rangeValue / 100) * duration) )
               videoSlider.current.style.left = `calc(${rangeValue / 100} * (100% - 96px))`;
            };
            
            rangerRef.current.addEventListener('input', input);
         };
      } else {
         setBackGroundPic(null);
      }
   }, [videoLink]);

   return (
      <div className={styles.cover}>
         <div className={styles.cover_header}>
            <div className={styles.cover_title}>Cover</div>
         </div>
         <div className={styles.cover_body}>
            <div className={styles.cover_Input}>
               <div className={`${styles.videoCover_Slider} ${!backGroundPic && styles.displayNon}`} ref={videoSlider}>
                  <video src={videoLink} ref={videoRef} className={`${styles.videoCover}`}></video>
               </div>
               <input
                  type="range"
                  min="0"
                  max="100"
                  className={`${styles.processBar} ${!backGroundPic && styles.displayNon}`}
                  defaultValue="0"
                  ref={rangerRef}
               ></input>
               {backGroundPic ? (
                  <Fragment>
                     {backGroundPic.map((pic) => {
                        return (
                           <div key={pic} className={styles.videoSize}>
                              <Video nonBorder nonController noComment videoUploadLink={pic} videoResize></Video>
                           </div>
                        );
                     })}
                  </Fragment>
               ) : (
                  <div className={styles.cover_video}></div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Cover;
