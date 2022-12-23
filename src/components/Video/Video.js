import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faCaretRight, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { userVideoLink } from 'api';
import LTKH from 'src/components/Video/LTKH.mp4';

function Video({ autoPlay, setAutoPlay, noComment, videoUploadLink, video, videoResize, nonController, nonBorder }) {
   
   const classes = `${styles.videoPLayer} ${videoResize && styles.videoResize} ${nonBorder && styles.nonBorder}`;

   //Video Controler
   const videoProcessTimeRef = useRef();
   const range = useRef();
   const videoCurrentProcess = useRef();
   const videoFullTimeRef = useRef();
   const videoRef = useRef();

   const getTime = (time) => {
      const floorHours = Math.floor(time / 3600);
      const floorMinutes = Math.floor((time / 3600 - floorHours) * 60);
      const floorSeconds = Math.floor(((time / 3600 - floorHours) * 60 - floorMinutes) * 60);
      if (floorHours !== 0) {
         return (
            String(floorHours).padStart(2, '0') +
            ':' +
            String(floorMinutes).padStart(2, '0') +
            ':' +
            String(floorSeconds).padStart(2, '0')
         );
      } else {
         return String(floorMinutes).padStart(2, '0') + ':' + String(floorSeconds).padStart(2, '0');
      }
   };

   useEffect(() => {
      if (!nonController) {
         const video = videoRef.current;
         const ranger = range.current;
         video.onloadedmetadata = () => {
            videoFullTimeRef.current.innerHTML = '/' + getTime(videoRef.current.duration);
         };
         const setVideoCurrentProcess = () => {
            var current = (video.currentTime / video.duration) * 100;
            videoCurrentProcess.current.style.width = current + '%';
            ranger.value = Math.floor(current);
         };
         const timeupdate = () => {
            setVideoCurrentProcess();
            videoProcessTimeRef.current.innerHTML = getTime(video.currentTime);
            if (video.ended) {
               setAutoPlay(false);
               resetVideo();
            }
         };
         const input = () => {
            video.currentTime = (ranger.value / 100) * video.duration;
            setVideoCurrentProcess();
         };
         const resetVideo = () => {
            video.load();
         };
         video.addEventListener('timeupdate', timeupdate);
         ranger.addEventListener('input', input);

         return () => {
            video.removeEventListener('timeupdate', timeupdate);
            ranger.removeEventListener('input', input);
         };
      }
   }, []);
   useEffect(() => {
      if (autoPlay) {
         videoRef.current.play();
         
      } else {
         videoRef.current.load();
   
      }
   }, [autoPlay]);

   //Volume Controler
   const volumeBar = useRef();
   const volumeProcess = useRef();
   const [sound, setSound] = useState(false);
   const soundValue = useRef(100);

   const setSoundCurrentProcess = useCallback((value) => {
      soundValue.current = value;
      volumeBar.current.value = value;
      volumeProcess.current.style.width = value + '%';
      videoRef.current.volume = value / 100;
      if (value == 0) {
         setSound(false);
      }
      if (value != 0) {
         setSound(true);
      }
   });

   useEffect(() => {
      if (!nonController) {
         volumeBar.current.addEventListener('input', () => {
            videoRef.current.muted = false;
            soundValue.current = volumeBar.current.value;
            setSoundCurrentProcess(volumeBar.current.value);
         });
         return;
      }
   }, []);

   // console.log('videoName: ' + video.video)
   // console.log('autoPlay: ' + autoPlay)
   // console.log('noComment: ' + noComment)
   // console.log('videoUploadLink: ' + videoUploadLink)
   // console.log('video: ' + video)
   // console.log('videoResize: ' + videoResize)
   // console.log('nonController: ' + nonController)
   // console.log('nonBorder: ' + nonBorder)
   // console.log('nonBorder: ' + nonBorder)
   // console.log('sound: ' + sound)
   return (
      <div className={classes}>
         {noComment ? (
            <video
               ref={videoRef}
               muted
               src={videoUploadLink}
               loop={true}
               className={`${styles.video} ${nonBorder && styles.nonBorder}`}
            ></video>
         ) : (
            <Link to={`/@${video.nickName}/video/${video.video}`}>
               <video
                  ref={videoRef}
                  muted
                  src={userVideoLink(video.nickName + '/MainVideo/' + video.video + '#t='  +0)}
                  loop={true}
                  className={`${styles.video} ${nonBorder && styles.nonBorder}`}
               ></video>
            </Link>
         )}

         {!nonController && (
            <Fragment>
               <div className={styles.procession}>
                  <div className={styles.processBar_Container}>
                     <div className={styles.processBarAll}>
                        <input
                           ref={range}
                           type="range"
                           min="1"
                           max="100"
                           className={styles.processBar}
                           defaultValue="0"
                        ></input>
                        <div ref={videoCurrentProcess} className={styles.videoCurrentProcess}></div>
                     </div>
                  </div>
                  <div className={styles.timerContainer}>
                     <div ref={videoProcessTimeRef} className={styles.timeCurrent}>
                        00:00
                     </div>
                     <div ref={videoFullTimeRef} className={styles.timeAll}>
                        /00:00
                     </div>
                  </div>
               </div>
               <FontAwesomeIcon
                  icon={faPause}
                  className={`${styles.continueButton} ${!autoPlay && styles.visible}`}
                  onClick={() => {
                     videoRef.current.pause();
                     setAutoPlay(false);
                  }}
               ></FontAwesomeIcon>
               <FontAwesomeIcon
                  icon={faCaretRight}
                  className={`${styles.pauseButton} ${autoPlay && styles.visible}`}
                  onClick={() => {
                     videoRef.current.play();

                     setAutoPlay(true);
                  }}
               ></FontAwesomeIcon>
               <FontAwesomeIcon
                  icon={faVolumeHigh}
                  className={`${styles.volumeButton} ${!sound && styles.visible}`}
                  onClick={() => {
                     setSoundCurrentProcess(0);
                     setSound(false);
                  }}
               ></FontAwesomeIcon>
               <FontAwesomeIcon
                  icon={faVolumeXmark}
                  className={`${styles.muteButton} ${sound && styles.visible}`}
                  onClick={() => {
                     videoRef.current.muted = false;
                     setSoundCurrentProcess(100);
                     setSound(true);
                  }}
               ></FontAwesomeIcon>
            </Fragment>
         )}

         <div className={styles.volumeBar_container}>
            <div className={styles.volumeBar}>
               <input ref={volumeBar} type="range" min="0" max="100" className={styles.volume} defaultValue="0"></input>
               <div ref={volumeProcess} className={styles.volumeProcess}></div>
            </div>
         </div>
      </div>
   );
}

export default memo(Video);
