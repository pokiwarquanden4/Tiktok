import styles from './VideoGifts.module.scss';
import VideoGift from './VideoGift/VideoGift';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { GiftIcon } from 'APIService/UserLive/UserLiveAPI';
function VideoGifts({ fullScreen }) {
   const [minWidth, setMinWidth] = useState(903);
   const [currentGiftScroll, setCurrentGiftScroll] = useState(0);
   const [numberItems, setNumberItems] = useState(9);
   const listGift = [];
   const videoGiftWrapperRef = useRef();
   const giftScroll = useRef([]);

   useEffect(() => {
      const event = () => {
         let ref = videoGiftWrapperRef.current;
         let currentWidth = ref.getBoundingClientRect().right - ref.getBoundingClientRect().left;
         giftScroll.current.forEach((item) => {
            item.style.minWidth = `${currentWidth - 60}px`;
            setMinWidth(currentWidth - 60);
         });
      };
      window.addEventListener('resize', event);

      return () => {
         window.removeEventListener('resize', event);
      };
   }, []);
   useEffect(() => {
      // console.log(minWidth);
      // if (minWidth < 903 && minWidth > 850 && numberItems !== 9) {
      //    console.log('9');
      //    setNumberItems(9);
      // }
      // if (minWidth < 850 && minWidth > 800 && numberItems !== 8) {
      //    console.log('8');
      //    setNumberItems(8);
      // }
      // if (minWidth < 650 && minWidth > 600 && numberItems !== 7) {
      //    console.log('7');
      //    setNumberItems(7);
      // }
      // if (minWidth < 600 && minWidth > 550 && numberItems !== 6) {
      //    console.log('6');
      //    setNumberItems(6);
      // }
      // if (minWidth < 700 && minWidth > 650 && numberItems !== 5) {
      //    console.log('5');
      //    setNumberItems(5);
      // }
   }, [minWidth]);

   //Get The Gift Array
   let arr = [];
   let number = 0;
   GiftIcon.forEach((item) => {
      arr.push(item);
      number++;
      if (number === numberItems) {
         listGift.push(arr);
         arr = [];
         number = 0;
      }
      if (item === GiftIcon[GiftIcon.length - 1] && arr.length !== 0) {
         listGift.push(arr);
         arr = [];
         number = 0;
      }
   });

   return (
      <div ref={videoGiftWrapperRef} className={styles.videoGift_wrapper}>
         <div className={styles.videoGift}>
            {listGift.map((items) => {
               return (
                  <div
                     ref={(element) => {
                        giftScroll.current[listGift.indexOf(items)] = element;
                     }}
                     className={styles.videoGift_group}
                     key={listGift.indexOf(items)}
                  >
                     {items.map((item) => {
                        return <VideoGift src={item.src} key={item.id}></VideoGift>;
                     })}
                  </div>
               );
            })}
         </div>
         {currentGiftScroll !== listGift.length - 1 && (
            <div
               className={styles.nextGifts}
               onClick={() => {
                  giftScroll.current[currentGiftScroll + 1].scrollIntoView({
                     behavior: 'smooth',
                     inline: 'start',
                     block: 'nearest',
                  });
                  setCurrentGiftScroll(currentGiftScroll + 1);
               }}
            >
               <FontAwesomeIcon icon={faAngleRight} className={styles.nextButton}></FontAwesomeIcon>
            </div>
         )}

         {currentGiftScroll !== 0 && (
            <div
               className={styles.previousGifts}
               onClick={() => {
                  giftScroll.current[currentGiftScroll - 1].scrollIntoView({
                     behavior: 'smooth',
                     inline: 'start',
                     block: 'nearest',
                  });
                  setCurrentGiftScroll(currentGiftScroll - 1);
               }}
            >
               <FontAwesomeIcon icon={faAngleLeft} className={styles.previousButton}></FontAwesomeIcon>
            </div>
         )}
      </div>
   );
}

export default VideoGifts;
