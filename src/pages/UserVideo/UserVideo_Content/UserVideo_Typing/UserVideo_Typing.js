import styles from './UserVideo_Typing.module.scss';
import { CaptionIcon, EmotionIcon } from 'components/Icon';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/users';
import { updateVideoCommentAPI } from 'api';

function UserVideo_Typing({ replyTo, user }) {
   const currentUser = useSelector(activeUserSelector);
   const [text, setText] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;
      setText(value);
   };

   const handlePost = (e) => {
      const comment = {
         video: user.video,
         commentId: replyTo[0],
         replyName: replyTo[1],
         name: currentUser.nickName,
         avatar: currentUser.avatar,
         liker: [],
         title: text,
         createdAt: Date.now,
         updatedAt: Date.now,
      };

      updateVideoCommentAPI(comment);
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
         <div className={`${text ? styles.postActive : styles.post}`} onClick={handlePost}>
            Post
         </div>
      </div>
   );
}

export default UserVideo_Typing;
