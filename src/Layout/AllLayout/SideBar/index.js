import styles from './SideBar.module.scss';
import Menu from './Menu/Menu';
import config from '../../../config/routes';
import {
   HomeIcon,
   HomeIconActive,
   FollowingIcon,
   FollowingIconActive,
   LiveIcon,
   LiveIconActive,
} from '../../../components/Icon/index';
import { Recommend } from './Recommend';
import { Discover } from './Discover';
import { MoreInfo } from './MoreInfo';
import { Fragment, memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recommendUserSelector } from 'redux/selectors/users';
import { recommendUser } from 'redux/actions/usersActions/usersActions';

function SideBar({ smallSize, liveAction, className, noHoverAction }) {
   const dispatch = useDispatch();
   const listUsers = useSelector(recommendUserSelector);

   useEffect(() => {
      dispatch(recommendUser.recommendUserRequest());
   }, [dispatch]);

   const discover = [
      {
         id: 1,
         link: '/',
         type: 'music',
         content: 'hello',
      },
      {
         id: 2,
         link: '/D',
         type: 'page',
         content: 'PageZOnesdfsdfsfsfsfsfsf',
      },
      {
         id: 3,
         link: '/',
         type: 'music',
         content: 'hellodsf',
      },
      {
         id: 4,
         link: '/',
         type: 'music',
         content: 'helloDDD',
      },
      {
         id: 5,
         link: '/',
         type: 'music',
         content: 'helloDFSDF',
      },
   ];

   const fakeAPI = {
      Recommend: {
         type: 'Suggested accounts',
         data: listUsers,
      },
      Follow: {
         type: 'Following accounts',
         data: listUsers,
      },
   };

   const data = [
      {
         id: 1,
         title: 'For Your',
         to: config.home,
         icon: {
            iconUnActive: <HomeIcon></HomeIcon>,
            iconActive: <HomeIconActive></HomeIconActive>,
         },
      },
      {
         id: 2,
         title: 'Following',
         to: config.Following,
         icon: {
            iconUnActive: <FollowingIcon></FollowingIcon>,
            iconActive: <FollowingIconActive></FollowingIconActive>,
         },
      },
      {
         id: 3,
         title: 'Live',
         to: config.Live,
         icon: {
            iconUnActive: <LiveIcon></LiveIcon>,
            iconActive: <LiveIconActive></LiveIconActive>,
         },
      },
   ];

   const moreInfo = [
      {
         type: 'About Us',
         id: 1,
         data: [
            {
               id: 1,
               link: '/',
               title: 'About',
            },
            {
               id: 2,
               link: '/',
               title: 'Tiktok Browser',
            },
            {
               id: 3,
               link: '/',
               title: 'NewRooms',
            },
            {
               id: 4,
               link: '/',
               title: 'Contact',
            },
            {
               id: 5,
               link: '/',
               title: 'Careers',
            },
            {
               id: 6,
               link: '/',
               title: 'About You',
            },
         ],
      },
      {
         type: 'Advantages',
         id: 2,
         data: [
            {
               id: 1,
               link: '/',
               title: 'About',
            },
            {
               id: 2,
               link: '/',
               title: 'Tiktok Browser',
            },
            {
               id: 3,
               link: '/',
               title: 'NewRooms',
            },
            {
               id: 4,
               link: '/',
               title: 'Contact',
            },
            {
               id: 5,
               link: '/',
               title: 'Careers',
            },
            {
               id: 6,
               link: '/',
               title: 'About You',
            },
         ],
      },
      {
         type: 'Help',
         id: 3,
         data: [
            {
               id: 1,
               link: '/',
               title: 'About',
            },
            {
               id: 2,
               link: '/',
               title: 'Tiktok Browser',
            },
            {
               id: 3,
               link: '/',
               title: 'NewRooms',
            },
            {
               id: 4,
               link: '/',
               title: 'Contact',
            },
            {
               id: 5,
               link: '/',
               title: 'Careers',
            },
            {
               id: 6,
               link: '/',
               title: 'About You',
            },
         ],
      },
   ];

   const classes = `${styles.wrapper} ${className && ([styles.className] = className)} ${
      smallSize && styles.smallSize
   }`;

   const asideRef = useRef();

   return (
      <div className={styles.content}>
         <aside ref={asideRef} className={classes}>
            <Menu data={data}></Menu>
            {!liveAction && (
               <Fragment>
                  <Recommend data={fakeAPI.Recommend} noHoverAction={noHoverAction}></Recommend>
                  <Recommend data={fakeAPI.Follow} noHoverAction={noHoverAction}></Recommend>
                  <Discover data={discover}></Discover>
               </Fragment>
            )}
            {liveAction && (
               <Fragment>
                  <Recommend data={fakeAPI.Recommend} smallSize={smallSize} noHoverAction={noHoverAction}></Recommend>
               </Fragment>
            )}
            <MoreInfo data={moreInfo}></MoreInfo>
         </aside>
         <div className={styles.scrollBar_hider}></div>
      </div>
   );
}

export default memo(SideBar);
