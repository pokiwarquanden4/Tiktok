import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faCaretRight, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import LTKH from 'src/components/Video/LTKH.mp4';
import { Link } from 'react-router-dom';

function Video({ bigVideo, autoPlay }) {
   //Video Controler
   const [play, setPlay] = useState(true);
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
            setPlay(false);
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
   }, []);
   useEffect(() => {
      if (autoPlay) {
         videoRef.current.play();
         setPlay(true);
      } else {
         videoRef.current.load();
         setPlay(false);
      }
   }, [autoPlay]);

   //Volume Controler
   const volumeBar = useRef();
   const volumeProcess = useRef();
   const [sound, setSound] = useState(false);
   const soundValue = useRef(100);

   const setSoundCurrentProcess = (value) => {
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
   };

   useEffect(() => {
      volumeBar.current.addEventListener('input', () => {
         videoRef.current.muted = false;
         soundValue.current = volumeBar.current.value;
         setSoundCurrentProcess(volumeBar.current.value);
      });
      return;
   }, []);

   return (
      <div to={`/@TranMinhQuang/video`} className={styles.videoPLayer}>
         <Link to={`/@TranMinhQuang/video`}>
            <video
               ref={videoRef}
               muted
               src={LTKH}
               className={`${styles.video} ${styles.smallVideo}`}
               poster="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/947af1d38d814562bc914724f973e5db~tplv-r00ih4996s-1:720:720.jpeg?x-expires=1667934000&x-signature=jQTpg7jB9mWUDxAO2253LvuGSP0%3D"
            ></video>
         </Link>
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
            className={`${styles.continueButton} ${!play && styles.visible}`}
            onClick={() => {
               videoRef.current.pause();
               setPlay(false);
            }}
         ></FontAwesomeIcon>
         <FontAwesomeIcon
            icon={faCaretRight}
            className={`${styles.pauseButton} ${play && styles.visible}`}
            onClick={() => {
               videoRef.current.play();

               setPlay(true);
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
         <div className={styles.volumeBar_container}>
            <div className={styles.volumeBar}>
               <input ref={volumeBar} type="range" min="0" max="100" className={styles.volume} defaultValue="0"></input>
               <div ref={volumeProcess} className={styles.volumeProcess}></div>
            </div>
         </div>
      </div>
   );
}

export default Video;
