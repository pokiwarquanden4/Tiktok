import styles from './UserVideo_Typing.module.scss';
import { CaptionIcon, EmotionIcon } from 'components/Icon';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import { useDispatch, useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function UserVideo_Typing({ replyTo, setReplyTo, user, video }) {
   console.log(replyTo);
   const dispatch = useDispatch();
   const currentUser = useSelector(activeUserSelector);
   const [text, setText] = useState('');

   const handleChange = (e) => {
      const value = e.target.value;
      setText(value);
   };

   const handlePost = (e) => {
      if (text) {
         let comment;
         if (replyTo[0] === null) {
            comment = {
               video: video.video,
               name: currentUser.nickName,
               avatar: currentUser.avatar,
               liker: [],
               reply: [],
               title: text,
            };
         } else {
            comment = {
               video: video.video,
               commentId: replyTo[0],
               replyName: replyTo[1],
               name: currentUser.nickName,
               avatar: currentUser.avatar,
               liker: [],
               title: text,
            };
         }

         dispatch(videoActions.updateCommentRequest(comment));
         setReplyTo([null, null]);
         setText('');
      }
   };

   return (
      <div className={styles.wrapper}>
         {replyTo[1] && (
            <div className={styles.replyTo}>
               <div className={styles.replyTo_content}>
                  <div className={styles.replyTo_title}>{replyTo[1]}</div>
                  <FontAwesomeIcon
                     className={styles.replyTo_icon}
                     icon={faX}
                     onClick={() => {
                        setReplyTo([null, null]);
                     }}
                  ></FontAwesomeIcon>
               </div>
            </div>
         )}
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
      </div>
   );
}

export default UserVideo_Typing;
