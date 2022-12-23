import styles from './Header.module.scss';
import image from 'src/Asset/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faGear,
   faArrowRightFromBracket,
   faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Button from 'src/components/Button';
import Menu from 'src/components/Poper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from 'src/components/images';
import SearchBar from './Search';
import { Link, useNavigate } from 'react-router-dom';
import config from 'src/config';
import { MailBox } from './MailBox';
import { MessageZone } from './MessageZone';
import { UploadZone } from './UploadZone';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { useDispatch, useSelector } from 'react-redux';
import { activeUserSelector, loginUserSelector } from 'redux/selectors/usersSelector';
import { userAvatar } from 'api';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';

function Header({ fullScreen }) {
   const navigate = useNavigate();
   const user = useSelector(activeUserSelector);
   const login = useSelector(loginUserSelector);
   const dispatch = useDispatch();
   const MenuItem = [
      {
         icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
         title: 'Tiếng Việt',
         children: {
            title: 'languages',
            data: [
               { code: 'en', title: 'English', type: 'language' },
               { code: 'tv', title: 'Tiếng Việt', type: 'language' },
            ],
         },
      },
      { icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>, title: 'Feed Back', to: config.routes.home },
      { icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>, title: 'KeyBoard & ShortCut' },
   ];

   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         dispatch(videoActions.getVideoRequest([...user.following, user.nickName]));
      }
   }, [user]);

   const UserMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
         title: 'User',
         type: 'User',
         to: `/@${user.nickName}`,
      },
      { icon: <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>, title: 'Get Coins', to: config.routes.home },
      { icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>, title: 'Settings', to: config.routes.home },
      ...MenuItem,
      {
         icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
         title: 'Logout',
         separate: true,
         type: 'logout',
      },
   ];

   const HandleMenuChange = (menuItem) => {
      //Handle Action using Type
      switch (menuItem.type) {
         case 'logout':
            console.log('home page');
            dispatch(
               activeUser.logoutUserRequest({
                  nickName: user.nickName,
               }),
            );
            dispatch(videoActions.removeVideoSuccess());
            navigate('/');
            break;
         default:
            return;
      }
   };

   const HandleButtonChange = useCallback(() => {
      dispatch(inputZone.showLoginSignUp());
   });

   const getAvatar = useCallback((user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.nickName + '/' + user.avatar);
   });

   return (
      <header className={`${styles.wrapper} ${fullScreen && styles.fullScreen}`}>
         <div className={styles.inner}>
            {/* Logo */}
            <Link to={config.routes.home} className={styles.logo}>
               <img src={image.logo} alt="Tiktok"></img>
            </Link>

            {/* Search Bar */}
            <SearchBar></SearchBar>

            {/* Action */}
            <div className={styles.actions}>
               {login ? (
                  <Fragment>
                     <UploadZone></UploadZone>
                     <MessageZone></MessageZone>
                     <MailBox></MailBox>
                  </Fragment>
               ) : (
                  <Fragment>
                     <UploadZone></UploadZone>
                     <Button primary onClick={HandleButtonChange}>
                        Login
                     </Button>
                  </Fragment>
               )}

               <Menu items={login ? UserMenu : MenuItem} onChange={HandleMenuChange}>
                  {login ? (
                     <div className={styles.fixBugTippy}>
                        <Image
                           src={getAvatar(user)}
                           className={styles.userAvatar}
                           alt={user.nickName}
                           fallBack="C:\Users\Admin\Desktop\Tài Liệu Học lập trình\Tài Liệu ReactJS\tiktok\src\Asset\Avatar\DefaultAvatar.png"
                        ></Image>
                     </div>
                  ) : (
                     <button className={styles.menuBar}>
                        <FontAwesomeIcon className={styles.actionBar} icon={faEllipsisVertical}></FontAwesomeIcon>
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
