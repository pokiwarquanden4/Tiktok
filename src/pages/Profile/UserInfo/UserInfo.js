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
import { memo, useEffect } from 'react';
import { userAvatar } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from 'redux/actions/messageActions/messageActions';
import { v4 as uuidv4 } from 'uuid';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { useNavigate } from 'react-router-dom';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

function UserInfo({ user }) {
   const currentUser = useSelector(activeUserSelector);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const getAvatar = (user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.nickName + '/' + user.avatar);
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
      currentUser && (
         <div className={styles.userInfo}>
            <div className={styles.mainInfo}>
               <Image src={getAvatar(user)} className={styles.avatar} alt="fullname"></Image>
               <div className={styles.userInfo}>
                  <div className={styles.userName}>
                     {user.nickName}
                     {user.tick && (
                        <FontAwesomeIcon className={styles.checkIcon} icon={faCheckCircle}></FontAwesomeIcon>
                     )}
                  </div>
                  <div className={styles.userNickname}>{user.full_name}</div>
                  {user.nickName === currentUser.nickName ? (
                     <div className={styles.buttonWrapper}>
                        <button
                           className={styles.editButton}
                           onClick={() => {
                              dispatch(inputZone.showEditUser());
                           }}
                        >
                           Edit Profile
                        </button>
                     </div>
                  ) : currentUser.following.indexOf(user.nickName) === -1 ? (
                     <Button
                        primary
                        className={styles.followButton}
                        onClick={() => {
                           dispatch(
                              activeUser.followUserRequest({
                                 followingUser: currentUser.nickName,
                                 followerUser: user.nickName,
                              }),
                           );
                        }}
                     >
                        Follow
                     </Button>
                  ) : (
                     <div className={styles.buttonWrapper}>
                        <button
                           className={styles.messageButton}
                           onClick={() => {
                              let idRoom = null;
                              for (let i = 0; i < user.message.length; i++) {
                                 for (let j = 0; j < currentUser.message.length; j++) {
                                    if (user.message[i] === currentUser.message[j]) {
                                       idRoom = user.message[i];
                                    }
                                 }
                              }
                              if (!idRoom) {
                                 dispatch(
                                    messageAction.createMessageRequest({
                                       _id: uuidv4(),
                                       avatar: user.avatar,
                                       members: [user.nickName, currentUser.nickName],
                                       comment: [],
                                    }),
                                 );
                              }
                              navigate('/message', { state: { idRoom: idRoom } });
                           }}
                        >
                           Messages
                        </button>
                        <MessageTippy content="Unfollow" placement="bottom" arrow="true">
                           <div
                              className={styles.userIcon}
                              onClick={() => {
                                 dispatch(
                                    activeUser.unFollowUserRequest({
                                       followingUser: currentUser.nickName,
                                       followerUser: user.nickName,
                                    }),
                                 );
                              }}
                           >
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
                  {user.following.length}
                  <p className={styles.currentFollow_title}>Following</p>
               </div>
               <div className={styles.follower}>
                  {user.follower.length}
                  <p className={styles.follower_title}>Followers</p>
               </div>
               <div className={styles.likes}>
                  {user.likes} <p className={styles.likes_title}>Likes</p>
               </div>
            </div>
            <div className={styles.discription}>{user.description}</div>
         </div>
      )
   );
}

export default memo(UserInfo);
