import styles from './UserVideo_Video.module.scss';
import { DownArrowButton, FlagIcon, XButton } from 'components/Icon';
import LTKH from 'src/components/Video/LTKH.mp4';
import Image from 'src/components/images';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

function UserVideo_Video() {
   //Page Navi
   const navigate = useNavigate();
   //Video
   const videoRef = useRef();
   //Video Process
   const range = useRef();
   const videoCurrentProcess = useRef();
   const videoProcessTimeRef = useRef();
   const videoFullTimeRef = useRef();
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
      video.play();
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
      };
      const input = () => {
         video.currentTime = (ranger.value / 100) * video.duration;
         setVideoCurrentProcess();
      };

      video.addEventListener('timeupdate', timeupdate);
      ranger.addEventListener('input', input);

      return () => {
         video.removeEventListener('timeupdate', timeupdate);
         ranger.removeEventListener('input', input);
      };
   }, []);

   //Video Volume
   const volumeBar = useRef();
   const volumeProcess = useRef();
   const [sound, setSound] = useState(false);
   const soundValue = useRef(100);
   const setSoundCurrentProcess = (value) => {
      soundValue.current = value;
      volumeBar.current.value = value;
      volumeProcess.current.style.width = value + '%';
      videoRef.current.volume = value / 100;
      if (value === 0) {
         setSound(false);
      }
      if (value !== 0) {
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
      <div className={styles.video_wrapper}>
         <div className={styles.videoZone}>
            <video className={styles.video} ref={videoRef} loop muted src={LTKH}></video>
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
         </div>
         <div className={styles.volumeButton_wrapper}>
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
         </div>
         <div className={styles.volumeBar_container}>
            <div className={styles.volumeBar}>
               <input ref={volumeBar} type="range" min="0" max="100" className={styles.volume} defaultValue="0"></input>
               <div ref={volumeProcess} className={styles.volumeProcess}></div>
            </div>
         </div>
         <Image
            src="data:image/png;base64,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"
            className={styles.avatarTitok}
            alt="fullname"
         ></Image>
         <button className={styles.xButton_wrapper} onClick={() => navigate(-1)}>
            <XButton className={styles.xButton}></XButton>
         </button>
         <div className={styles.report}>
            <FlagIcon className={styles.reportIcon}></FlagIcon>
            <div className={styles.reportContent}>Report</div>
         </div>
         <div className={styles.nextVideo}>
            <DownArrowButton className={styles.downIcon}></DownArrowButton>
         </div>
      </div>
   );
}

export default UserVideo_Video;
