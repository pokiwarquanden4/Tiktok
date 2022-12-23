import MessageTippy from '@tippyjs/react';
import { MessageIcon } from 'src/components/Icon';
import styles from './MessageZone.module.scss';
import config from 'src/config/routes';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { messageSelector } from 'redux/selectors/messageSelector';
import { useEffect, useState } from 'react';
import { activeUserSelector } from 'redux/selectors/usersSelector';

function MessageZone() {
   const messages = useSelector(messageSelector);
   const currentUser = useSelector(activeUserSelector);
   const [unSeenNumber, setUnSeenNumber] = useState(0);

   useEffect(() => {
      let count = 0;
      for (let i = 0; i < messages.length; i++) {
         for (let j = 0; j < messages[i].comment.length; j++) {
            if (messages[i].comment[j].seen === false && messages[i].comment[j].nickName !== currentUser.nickName) {
               count++;
            }
         }
      }
      setUnSeenNumber(count);
   }, [messages]);

   return (
      <div className={styles.fixBugTippy}>
         <NavLink to={config.Message}>
            <MessageTippy content="Message">
               <button className={styles.messageButton}>
                  <MessageIcon></MessageIcon>
                  {unSeenNumber !== 0 && <div className={styles.notification}>{unSeenNumber}</div>}
               </button>
            </MessageTippy>
         </NavLink>
      </div>
   );
}

export default MessageZone;
