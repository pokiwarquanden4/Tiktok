import styles from './MessageList.module.scss';
import Image from 'src/components/images';
import { Fragment, useState, useCallback } from 'react';
import { ThreeDotIcon } from 'src/components/Icon';
import Tippy from '@tippyjs/react/headless';
import { userAvatar } from 'api';

function MessageList({ data, opoUser, user }) {
   const [currentIcon, setCurrentIcon] = useState(0);

   const getAvatar = useCallback((user) => {
      if (Object.keys(user).length !== 0) {
         return userAvatar(user.nickName + '/' + user.avatar);
      }
   });

   const getTime = useCallback((time) => {
      const timeConvert = new Date(time);
      return timeConvert.getHours() + ':' + timeConvert.getMinutes();
   });

   return (
      <Fragment>
         {data
            .slice(0)
            .reverse()
            .map((item) => {
               return (
                  <Fragment key={item.time}>
                     <div
                        className={styles.yourMessageWrapper}
                        style={
                           opoUser.nickName === item.nickName
                              ? { flexDirection: 'row' }
                              : { flexDirection: 'row-reverse' }
                        }
                     >
                        <Image
                           src={opoUser.nickName === item.nickName ? getAvatar(opoUser) : getAvatar(user)}
                           className={styles.yourMessageAvatar}
                           alt={item.nickName}
                        ></Image>
                        <div className={styles.yourMessage}>
                           <p className={styles.yourMessageTitle}>{item.title}</p>
                        </div>

                        <Tippy
                           offset={[0, -10]}
                           trigger="click"
                           render={(attrs) => <div className={styles.settingIconTippy}></div>}
                        >
                           <div
                              className={`${styles.settingIconWrapper} ${
                                 currentIcon === item._id && styles.settingIconWrapper_Active
                              }`}
                              onClick={() => {
                                 setCurrentIcon(item._id);
                              }}
                           >
                              <ThreeDotIcon className={styles.settingIcon}></ThreeDotIcon>
                           </div>
                        </Tippy>
                     </div>
                     {item.timeVisible && <div className={styles.time}>{getTime(item.time)}</div>}
                  </Fragment>
               );
            })}
      </Fragment>
   );
}

export default MessageList;
