import Image from 'src/components/images';
import styles from './MessageUser.module.scss';
import { ThreeDotIcon } from 'src/components/Icon';
import Menu from 'src/components/Poper/Menu';
import { MuteIcon, TrashCanIcon, HightLightOnTopIcon, FlagIcon, BandedIcon, UnMuteIcon } from 'src/components/Icon';
import { useState } from 'react';

function MessageUser({ data, onClick, active }) {
   const [foucus, setFoucus] = useState(false);

   const fakeAPI = [
      { icon: <MuteIcon></MuteIcon>, title: 'Mute' },
      { icon: <TrashCanIcon></TrashCanIcon>, title: 'Delete' },
      { icon: <HightLightOnTopIcon></HightLightOnTopIcon>, title: 'Pin to top' },
      { icon: <FlagIcon></FlagIcon>, title: 'Report' },
      { icon: <BandedIcon></BandedIcon>, title: 'Block' },
   ];

   const getLastComment = () => {
      const arr = data.comment;
      const content = arr[arr.length - 1].title;
      const time = arr[arr.length - 1].time;

      return content + ' ' + time;
   };

   const ClickOutSide = () => {
      setFoucus(false);
   };

   const classes = `${styles.user} ${active ? styles.userActive : ''}`;

   return (
      <div className={classes} onClick={onClick}>
         <div className={styles.userInFo}>
            <Image src={data.img} className={styles.userImage} alt={data.mainName}></Image>
            <div className={styles.userMessage}>
               <div className={styles.userMainName}>{data.mainName}</div>
               <div className={styles.userLastComment}>{getLastComment()}</div>
            </div>
            <Menu items={fakeAPI} openOnClick openOnClick_Action={ClickOutSide}>
               <span
                  className={foucus ? styles.userSettingFocus : styles.userSetting}
                  onClick={() => {
                     setFoucus(true);
                  }}
               >
                  <ThreeDotIcon></ThreeDotIcon>
               </span>
            </Menu>
         </div>
      </div>
   );
}

export default MessageUser;
