import styles from './MessageList.module.scss';
import Image from 'src/components/images';
import { Fragment, useState } from 'react';
import { ThreeDotIcon } from 'src/components/Icon';
import Tippy from '@tippyjs/react/headless';

function MessageList({ data }) {
   const [currentIcon, setCurrentIcon] = useState(0);

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
                        style={item.guest ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}
                     >
                        <Image src={item.img} className={styles.yourMessageAvatar} alt={item.mainName}></Image>
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
                                 currentIcon === item.id && styles.settingIconWrapper_Active
                              }`}
                              onClick={() => {
                                 setCurrentIcon(item.id);
                              }}
                           >
                              <ThreeDotIcon className={styles.settingIcon}></ThreeDotIcon>
                           </div>
                        </Tippy>
                     </div>
                     {item.timeVisible && <div className={styles.time}>{item.time}</div>}
                  </Fragment>
               );
            })}
      </Fragment>
   );
}

export default MessageList;
