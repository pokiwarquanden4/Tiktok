import styles from './UserVideo_Comment.module.scss';
import Image from 'src/components/images';
import { FlagIcon, Heart, HeartFill, ThreeDotIcon } from 'components/Icon';
import Tippy from '@tippyjs/react/headless';
import Wrapper from 'components/Poper/wrapper';
import { userAvatar } from 'api';
import { useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { likeCommentVideoAPI, unLikeCommentVideoAPI } from 'api';
import { useState } from 'react';
function UserVideo_Comment({ notHost, data, setReplyTo, video }) {
   const date = new Date(data.updatedAt);
   const currentUser = useSelector(activeUserSelector);
   const [heart, setHeart] = useState(data.liker.indexOf(currentUser.nickName) === -1);
   const [liker, setLiker] = useState(data.liker);

   const handleReply = () => {
      setReplyTo([data.id, data.name]);
   };

   return (
      <div className={styles.comment_wrapper}>
         <Image
            src={userAvatar(data.name + '/' + data.avatar)}
            alt="Quang"
            className={`${notHost ? styles.avatarNotHost : styles.avatar}`}
         ></Image>
         <div className={styles.mainContent}>
            <span className={styles.name}>{data.name}</span>
            <div className={styles.content}>{data.title}</div>
            <div className={styles.response}>
               <div className={styles.date}>
                  {date.getMonth() + 1}/{date.getDate()}
               </div>
               <div className={styles.answer} onClick={handleReply}>
                  Reply
               </div>
            </div>
         </div>
         <div className={styles.userAction}>
            <div className={styles.moreAction}>
               <Tippy
                  interactive
                  offset={[0, -3]}
                  placement="bottom-end"
                  render={(attrs) => (
                     <Wrapper className={styles.report}>
                        <FlagIcon className={styles.flagIcon}></FlagIcon>
                        <div className={styles.reportContent}>Report</div>
                     </Wrapper>
                  )}
               >
                  <span>
                     <ThreeDotIcon className={styles.threeDotIcon}></ThreeDotIcon>
                  </span>
               </Tippy>
            </div>
            <div className={styles.heartAction}>
               {heart ? (
                  <Heart
                     className={styles.heartIcon}
                     onClick={() => {
                        likeCommentVideoAPI({
                           video: video.video,
                           commentId: data.id,
                           userName: currentUser.nickName,
                        }).then(() => {
                           setHeart(false);
                           setLiker([...liker, currentUser.nickName]);
                        });
                     }}
                  ></Heart>
               ) : (
                  <HeartFill
                     className={styles.heartIconFill}
                     onClick={() => {
                        unLikeCommentVideoAPI({
                           video: video.video,
                           commentId: data.id,
                           userName: currentUser.nickName,
                        }).then(() => {
                           setHeart(true);
                           liker.splice(liker.indexOf(currentUser.nickName), 1);
                        });
                     }}
                  ></HeartFill>
               )}
               <div className={styles.heartNumber}>{liker.length}</div>
            </div>
         </div>
      </div>
   );
}

export default UserVideo_Comment;
