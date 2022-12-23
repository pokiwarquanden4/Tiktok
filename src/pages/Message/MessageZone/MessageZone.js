import { Fragment, useRef, useState, useCallback, useEffect } from 'react';
import Image from 'src/components/images';
import styles from './MessageZone.module.scss';
import { EmotionIcon, SendMessageIconRed } from 'src/components/Icon';
import { MessageList } from './MessageList';
import { userAvatar } from 'api';
import { getOneUserByNameAPI } from 'api';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { messageAction } from 'redux/actions/messageActions/messageActions';

function MessageZone({ data, user, chatUser }) {
   const dispatch = useDispatch();
   const [opoUser, setOpoUser] = useState(null);
   const [enterValue, setEnterValue] = useState('');
   const [sending, setSending] = useState(false);

   useEffect(() => {
      getOneUserByNameAPI(chatUser).then((result) => {
         setOpoUser(result.data);
      });
   }, [chatUser]);

   const getAvatar = useCallback((user) => {
      if (Object.keys(user).length !== 0) {
         return userAvatar(user.nickName + '/' + user.avatar);
      }
   });

   const checkPreviousTime = useCallback((comments) => {
      if (comments.length > 0) {
         comments[0].timeVisible = true;

         for (let i = 0; i < comments.length - 1; i++) {
            const timeBefore = new Date(comments[i].time);
            const timeAfter = new Date(comments[i + 1].time);
            if (timeAfter.getTime() - timeBefore.getTime() > 300000) {
               comments[i + 1].timeVisible = true;
            }
         }
      }
   });

   const handleSubmit = useCallback(() => {
      dispatch(
         messageAction.updateMessageRequest({
            mainId: data._id,
            comment: {
               _id: uuidv4(),
               avatar: user.avatar,
               nickName: user.nickName,
               title: enterValue,
               time: new Date(),
               seen: false,
            },
         }),
      );

      setEnterValue('');
      setSending(false);
   });
   return (
      <div className={styles.wrapper}>
         {data && opoUser && (
            <Fragment>
               <div className={styles.header}>
                  <Image src={getAvatar(opoUser)} className={styles.userImage} alt={opoUser.nickName}></Image>
                  <div className={styles.userInfo}>
                     <div className={styles.userMainName}>{opoUser.nickName}</div>
                     <div className={styles.userGmail}>@{opoUser.nickName}</div>
                  </div>
               </div>
               <div className={styles.content}>
                  {checkPreviousTime(data.comment)}
                  <MessageList data={data.comment} opoUser={opoUser} user={user}></MessageList>
               </div>
               <div className={styles.message}>
                  <div className={styles.messageInput}>
                     <input
                        type="text"
                        value={enterValue}
                        onChange={(e) => {
                           const value = e.target.value;
                           setEnterValue(e.target.value);
                           if (value) {
                              setSending(true);
                           } else {
                              setSending(false);
                           }
                        }}
                        onKeyDown={(e) => {
                           e.key === 'Enter' && handleSubmit();
                        }}
                        placeholder="Send a message..."
                     ></input>
                     <EmotionIcon className={styles.emotion}></EmotionIcon>
                  </div>
                  {sending && (
                     <SendMessageIconRed
                        className={styles.sendMessageButton}
                        onClick={handleSubmit}
                     ></SendMessageIconRed>
                  )}
               </div>
            </Fragment>
         )}
      </div>
   );
}

export default MessageZone;
