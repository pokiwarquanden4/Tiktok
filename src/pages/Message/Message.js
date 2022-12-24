import { Wrapper } from 'src/components/Poper';
import styles from './Message.module.scss';
import { SettingIcon } from 'src/components/Icon';
import { useCallback, useEffect, useState } from 'react';
import { MessageUser } from './MessageUser';
import { MessageZone } from './MessageZone';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { messageSelector } from 'redux/selectors/messageSelector';
import { seenMessageAPI } from 'api';
import socket from 'socket/connectSocket';
import { messageAction } from 'redux/actions/messageActions/messageActions';

function Message() {
   const dispatch = useDispatch();
   const location = useLocation();
   const messagers = useSelector(messageSelector);
   const user = useSelector(activeUserSelector);
   const [currentUser, setCurrenUser] = useState(location.state ? location.state.idRoom : 0);
   const [messageList, setMessageList] = useState(null);
   const getUserData = useCallback(() => {
      if (messagers) {
         let value;
         messagers.forEach((message) => {
            if (message._id === currentUser) {
               value = message;
            }
         });
         return value;
      }
   });

   useEffect(() => {
      const result = [];
      for (let i = 0; i < messagers.length; i++) {
         if (user.message.indexOf(messagers[i]._id) !== -1) {
            result.push(messagers[i]);
         }
      }
      setMessageList(result);
   }, [messagers]);
   useEffect(() => {
      if (currentUser) {
         seenMessageAPI({
            _id: currentUser,
            nickName: user.nickName,
         }).then(() => {
            dispatch(messageAction.getMessageRequest());
            socket.emit('updateMessage');
         });
      }
   }, [currentUser]);

   const getChatUser = useCallback((message) => {
      if (messagers) {
         if (message) {
            for (let i = 0; i < message.members.length; i++) {
               if (message.members[i] !== user.nickName) {
                  return message.members[i];
               }
            }
         }
      }
   });

   return (
      messageList && (
         <div className={styles.wrapper}>
            <Wrapper className={styles.listUser}>
               <div className={styles.header}>
                  <h3 className={styles.header_title}>Messages</h3>
                  <span className={styles.settingIcon}>
                     <SettingIcon></SettingIcon>
                  </span>
               </div>
               <div className={styles.content}>
                  {messageList.length === 0 ? (
                     <p className={styles.noMessage}>No messages yet</p>
                  ) : (
                     messageList.map((message) => {
                        return (
                           <MessageUser
                              key={message._id}
                              data={message}
                              chatUser={getChatUser(message)}
                              active={currentUser === message._id}
                              onClick={() => {
                                 setCurrenUser(message._id);
                              }}
                           ></MessageUser>
                        );
                     })
                  )}
               </div>
            </Wrapper>
            <Wrapper className={styles.messageZone}>
               {messageList.length > 0 && (
                  <MessageZone data={getUserData()} user={user} chatUser={getChatUser(getUserData())}></MessageZone>
               )}
            </Wrapper>
         </div>
      )
   );
}

export default Message;
