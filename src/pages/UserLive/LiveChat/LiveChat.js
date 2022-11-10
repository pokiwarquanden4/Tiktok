import { ClosingIcon, FirstRank } from 'components/Icon/UserLiveIcon';
import { LiveUserComment } from '../LiveUserComment';
import { EmotionIcon, SendMessageIcon, SendMessageIconRed } from 'components/Icon';
import styles from './LiveChat.module.scss';
import { useRef, useState } from 'react';
function LiveChat({ onClick, fullScreen }) {
   const inputWrapperRef = useRef();

   const [input, setInput] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;
      setInput(value);
   };
   return (
      <div className={`${styles.liveChat} ${fullScreen && styles.collapse}`}>
         <div className={styles.header}>
            <ClosingIcon
               onClick={() => {
                  onClick();
               }}
               className={styles.closingIcon}
            ></ClosingIcon>
            <div className={styles.header_title}>LIVE chat</div>
         </div>
         <div className={styles.topRank}></div>
         <div className={styles.chatBox}>
            <div className={styles.comment}>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
               <LiveUserComment></LiveUserComment>
            </div>
         </div>
         <div className={styles.input}>
            <div ref={inputWrapperRef} className={styles.input_wrapper}>
               <input
                  placeholder="Add comment..."
                  value={input}
                  onChange={handleChange}
                  onFocus={() => {
                     inputWrapperRef.current.classList.add(`${styles.focus}`);
                  }}
                  className={styles.inputText}
                  onBlur={() => {
                     inputWrapperRef.current.classList.remove(`${styles.focus}`);
                  }}
               ></input>
               <div className={styles.inputIcon}>
                  <EmotionIcon className={styles.emotionIcon}></EmotionIcon>
               </div>
            </div>
            <div className={styles.sendIcon}>
               {!input ? (
                  <SendMessageIcon className={styles.sending}></SendMessageIcon>
               ) : (
                  <SendMessageIconRed className={styles.sendingActive}></SendMessageIconRed>
               )}
            </div>
         </div>
      </div>
   );
}

export default LiveChat;
