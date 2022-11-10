import styles from './UserInfo.module.scss';
import Image from 'src/components/images';
import Button from 'src/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Menu from 'src/components/Poper/Menu';
import {
   Link,
   FaceBook,
   WhatsApp,
   Twitter,
   Path,
   LinkedIn,
   Telegram,
   Email,
   Line,
   MessageIcon,
   FlagIcon,
   BlockIcon,
   URL,
   User,
} from 'src/components/Icon';
import config from 'src/config';
import MessageTippy from '@tippyjs/react';
import { memo } from 'react';
import { userAvatar } from 'api';

function UserInfo({ user }) {
   const getAvatar = (user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.avatar);
   };
   const shareMenu = [
      { icon: <Link></Link>, title: 'Embeb', to: config.routes.home },
      { icon: <FaceBook></FaceBook>, title: 'Share to Facebook', to: config.routes.home },
      { icon: <WhatsApp></WhatsApp>, title: 'Share to WhatsApp', to: config.routes.home },
      { icon: <Twitter></Twitter>, title: 'Share to Twitter', to: config.routes.home },
      { icon: <Path></Path>, title: 'Copy Link', to: config.routes.home },
      { icon: <LinkedIn></LinkedIn>, title: 'Share to Linkedln', to: config.routes.home },
      { icon: <Telegram></Telegram>, title: 'Share to Telegram', to: config.routes.home },
      { icon: <Email></Email>, title: 'Share to Email', to: config.routes.home },
      { icon: <Line></Line>, title: 'Share to Line', to: config.routes.home },
   ];

   const moreActionMenu = [
      {
         icon: <MessageIcon className={styles.messageIcon}></MessageIcon>,
         title: 'Send Message',
         to: config.routes.home,
      },
      { icon: <FlagIcon></FlagIcon>, title: 'Share to Facebook', to: config.routes.home, separate: true },
      { icon: <BlockIcon></BlockIcon>, title: 'Share to WhatsApp', to: config.routes.home, separate: true },
   ];
   return (
      <div className={styles.userInfo}>
         <div className={styles.mainInfo}>
            <Image src={getAvatar(user)} className={styles.avatar} alt="fullname"></Image>
            <div className={styles.userInfo}>
               <div className={styles.userName}>
                  {user.name}
                  {user.tick && <FontAwesomeIcon className={styles.checkIcon} icon={faCheckCircle}></FontAwesomeIcon>}
               </div>
               <div className={styles.userNickname}>{user.subTitle}</div>
               {false ? (
                  <Button primary className={styles.followButton}>
                     Follow
                  </Button>
               ) : (
                  <div className={styles.buttonWrapper}>
                     <button className={styles.messageButton}>Messages</button>
                     <MessageTippy content="Unfollow" placement="bottom" arrow="true">
                        <div className={styles.userIcon}>
                           <User></User>
                        </div>
                     </MessageTippy>
                  </div>
               )}
            </div>
            <div className={styles.userContact}>
               <Menu items={shareMenu} className={styles.shareIcon_menu}>
                  <span className={styles.shareIconWrapper}>
                     <FontAwesomeIcon icon={faShare} className={styles.shareIcon}></FontAwesomeIcon>
                  </span>
               </Menu>
               <Menu items={moreActionMenu}>
                  <span className={styles.threeDotWrapper}>
                     <FontAwesomeIcon icon={faEllipsis} className={styles.threeDot}></FontAwesomeIcon>
                  </span>
               </Menu>
            </div>
         </div>
         <div className={styles.followInfo}>
            <div className={styles.currentFollow}>
               {user.following}
               <p className={styles.currentFollow_title}>Following</p>
            </div>
            <div className={styles.follower}>
               {user.follower}
               <p className={styles.follower_title}>Followers</p>
            </div>
            <div className={styles.likes}>
               {user.likes} <p className={styles.likes_title}>Likes</p>
            </div>
         </div>
         <div className={styles.discription}>{user.link.description}</div>
         <a className={styles.pageLink} href="/">
            <URL></URL>
            <div className={styles.pageLink_content}>{user.link.link}</div>
         </a>
      </div>
   );
}

export default memo(UserInfo);
