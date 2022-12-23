import Image from 'src/components/images';
import styles from './MessageUser.module.scss';
import { ThreeDotIcon } from 'src/components/Icon';
import Menu from 'src/components/Poper/Menu';
import { MuteIcon, TrashCanIcon, HightLightOnTopIcon, FlagIcon, BandedIcon, UnMuteIcon } from 'src/components/Icon';
import { useCallback, useEffect, useState } from 'react';
import { getOneUserByNameAPI } from 'api';
import { userAvatar } from 'api';

function MessageUser({ data, onClick, active, chatUser }) {
   const [opoUser, setOpoUser] = useState(null);
   const [foucus, setFoucus] = useState(false);

   useEffect(() => {
      getOneUserByNameAPI(chatUser).then((result) => {
         setOpoUser(result.data);
      });
   }, []);

   const commentSettings = [
      { icon: <MuteIcon></MuteIcon>, title: 'Mute' },
      { icon: <TrashCanIcon></TrashCanIcon>, title: 'Delete' },
      { icon: <HightLightOnTopIcon></HightLightOnTopIcon>, title: 'Pin to top' },
      { icon: <FlagIcon></FlagIcon>, title: 'Report' },
      { icon: <BandedIcon></BandedIcon>, title: 'Block' },
   ];

   const getDate = useCallback((time) => {
      return new Date(time);
   });

   const getLastComment = () => {
      if (data.comment.length > 0) {
         const arr = data.comment;
         const content = arr[arr.length - 1].title;
         const time = arr[arr.length - 1].time;
         const date = getDate(time);

         return content + ' ' + date.getHours() + ':' + date.getMinutes();
      }
   };

   const getAvatar = useCallback((user) => {
      if (Object.keys(user).length !== 0) {
         return userAvatar(user.nickName + '/' + user.avatar);
      }
   });

   const ClickOutSide = () => {
      setFoucus(false);
   };

   const classes = `${styles.user} ${active ? styles.userActive : ''}`;
   return (
      opoUser && (
         <div className={classes} onClick={onClick}>
            <div className={styles.userInFo}>
               <Image src={getAvatar(opoUser)} className={styles.userImage} alt={opoUser.nickName}></Image>
               <div className={styles.userMessage}>
                  <div className={styles.userMainName}>{opoUser.nickName}</div>
                  <div className={styles.userLastComment}>{getLastComment()}</div>
               </div>
               <Menu items={commentSettings} openOnClick openOnClick_Action={ClickOutSide}>
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
      )
   );
}

export default MessageUser;
