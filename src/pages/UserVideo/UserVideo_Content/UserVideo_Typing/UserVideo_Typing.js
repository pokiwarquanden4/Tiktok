import styles from './UserVideo_Typing.module.scss';
import { CaptionIcon, EmotionIcon } from 'components/Icon';
import { useState } from 'react';
import Tippy from '@tippyjs/react';

function UserVideo_Typing() {
   const [text, setText] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;
      setText(value);
   };

   return (
      <div className={styles.typingZone}>
         <div className={styles.typingZone_input}>
            <input
               value={text}
               type="text"
               className={styles.input}
               placeholder="Add comment..."
               onChange={(e) => {
                  handleChange(e);
               }}
            ></input>
            <Tippy content="'@' a user to tag them in your comments">
               <span>
                  <CaptionIcon className={styles.captionIcon}></CaptionIcon>
               </span>
            </Tippy>
            <Tippy content="Click to add emojis">
               <span>
                  <EmotionIcon className={styles.emotionIcon}></EmotionIcon>
               </span>
            </Tippy>
         </div>
         <div className={`${text ? styles.postActive : styles.post}`}>Post</div>
      </div>
   );
}

export default UserVideo_Typing;
