import MessageTippy from '@tippyjs/react';
import { MessageIcon } from 'src/components/Icon';
import styles from './MessageZone.module.scss';
import config from 'src/config/routes';
import { NavLink } from 'react-router-dom';

function MessageZone() {
   return (
      <div className={styles.fixBugTippy}>
         <NavLink to={config.Message}>
            <MessageTippy content="Message">
               <button className={styles.messageButton}>
                  <MessageIcon></MessageIcon>
               </button>
            </MessageTippy>
         </NavLink>
      </div>
   );
}

export default MessageZone;
