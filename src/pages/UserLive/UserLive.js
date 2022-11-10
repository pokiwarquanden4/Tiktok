import styles from './UserLive.module.scss';
import SideBar from 'Layout/AllLayout/SideBar';
import { LiveContent } from './LiveContent';
import { LiveChat } from './LiveChat';
import { useState } from 'react';

function UserLive() {
   const [fullScreen, setFullScreen] = useState(false);

   const setScreen = () => {
      if (fullScreen) {
         setFullScreen(false);
      } else {
         setFullScreen(true);
      }
   };

   return (
      <div className={styles.wrapper}>
         <SideBar smallSize liveAction noHoverAction className={styles.menu}></SideBar>
         <LiveContent fullScreen={fullScreen} onClick={setScreen}></LiveContent>
         <LiveChat fullScreen={fullScreen} onClick={setScreen}></LiveChat>
      </div>
   );
}

export default UserLive;
