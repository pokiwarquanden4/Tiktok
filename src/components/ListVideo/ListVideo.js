import styles from './ListVideo.module.scss';
import Button from 'src/components/Button';
import { MusicIconDiscover } from 'src/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import { Video } from 'components/Video';
import { useCallback, useEffect, useRef, useState } from 'react';
import { unLikeVideoAPI, userAvatar } from 'api';
import { getOneUserByNameAPI } from 'api';
import socketMessageVideo from 'socket/socketActions/socketMessageVideo';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { likeVideoAPI } from 'api';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

function ListVideo({ video, index }) {
   const dispatch = useDispatch();
   const [autoPlay, setAutoPlay] = useState(false);
   const [user, setUser] = useState(null);
   const listRef = useRef();
   const currentUser = useSelector(activeUserSelector);
   const [followed, setFollowed] = useState(false);
   const [liker, setLiker] = useState(video.liker);
   const [heart, setHeart] = useState(false);

   useEffect(() => {
      socketMessageVideo(dispatch, video);

      //Kiểm tra tim hay chưa
      if (video.liker.indexOf(currentUser.nickName) > -1) {
         setHeart(true);
      }
   }, []);

   useEffect(() => {
      if (user) {
         let pending = false;
         let auto = autoPlay;
         const PlayVideo = () => {
            pending = true;
         };
         setInterval(() => {
            if (pending) {
               pending = false;

               //handle
               const windowHeight = window.innerHeight - 50;
               const reviewTop = listRef.current.getBoundingClientRect().top - 60;
               const reviewBottom = listRef.current.getBoundingClientRect().bottom - 60;
               const componentHeight = reviewBottom - reviewTop;

               if (windowHeight - reviewTop > componentHeight / 2 && reviewTop > -(componentHeight / 2)) {
                  if (!auto) {
                     
                     auto = !auto;
                     setAutoPlay(true);
                  }
               } else {
                  if (auto) {
                     auto = !auto;
                     setAutoPlay(false);
                  }
               }
            }
         }, 500);

         PlayVideo();

         window.addEventListener('scroll', PlayVideo);

         return () => {
            window.removeEventListener('scroll', PlayVideo);
         };
      }
   }, [user]);

   useEffect(() => {
      getOneUserByNameAPI(video.nickName).then((result) => {
         setUser(result.data);
      });
   }, []);

   const getAvatar = useCallback((user) => {
      if (Object.keys(user).length !== 0) {
         return userAvatar(user.nickName + '/' + user.avatar);
      }
   });

   return (
      user && (
         <div loading="lazy" ref={listRef} className={styles.lists}>
            <Image src={getAvatar(user)} className={styles.avatar} alt="fullname"></Image>
            <div className={styles.main}>
               <div className={styles.content}>
                  <div className={styles.contentTitle}>
                     <div className={styles.name_info}>
                        <div className={styles.main_Name}>{user.nickName}</div>
                        <div className={styles.sub_Name}>{user.full_name}</div>
                        <FontAwesomeIcon className={styles.check} icon={faCheckCircle}></FontAwesomeIcon>
                     </div>
                     <div className={styles.more_info}>
                        <p className={styles.message}>Hello</p>
                        <strong className={styles.hastag}>#discover</strong>
                        <strong className={styles.hastag}>#discover</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                        <strong className={styles.hastag}>#discoverr</strong>
                     </div>
                     <div className={styles.backGround_music}>
                        <MusicIconDiscover></MusicIconDiscover>
                        <a href="/" className={styles.music_title}>
                           Hello Kitty
                        </a>
                     </div>
                  </div>

                  {user.nickName !== currentUser.nickName &&
                     (user.follower.indexOf(currentUser.nickName) === -1 ? (
                        <Button
                           follow
                           className={styles.button}
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
                        <Button
                           text
                           className={styles.button}
                           onClick={() => {
                              dispatch(
                                 activeUser.unFollowUserRequest({
                                    followingUser: currentUser.nickName,
                                    followerUser: user.nickName,
                                 }),
                              );
                           }}
                        >
                           Unfollow
                        </Button>
                     ))}
               </div>
               <div className={`${styles.video_Wrapper} ${styles.smallVideo}`}>
                  <div className={styles.videoSize}>
                     <Video autoPlay={autoPlay} setAutoPlay={setAutoPlay} video={video} user={user} videoResize></Video>
                  </div>
                  <div className={styles.userAction}>
                     <div
                        className={styles.userHeart}
                        onClick={() => {
                           if (!heart) {
                              likeVideoAPI({
                                 video: video.video,
                                 userName: currentUser.nickName,
                              }).then(() => {
                                 setLiker([...liker, currentUser.nickName]);
                                 setHeart(true);
                              });
                           } else {
                              unLikeVideoAPI({
                                 video: video.video,
                                 userName: currentUser.nickName,
                              }).then(() => {
                                 liker.splice(liker.indexOf(currentUser.nickName), 1);
                                 setHeart(false);
                              });
                           }
                        }}
                     >
                        <FontAwesomeIcon
                           className={`${styles.heartIcon} ${heart && styles.fillColor}`}
                           icon={faHeart}
                        ></FontAwesomeIcon>
                        <strong className={styles.numberHeart}>{liker.length}</strong>
                     </div>
                     <Link to={`/@${video.nickName}/video/${video.video}`}>
                        <div className={styles.userComment}>
                           <FontAwesomeIcon className={styles.commentIcon} icon={faCommentDots}></FontAwesomeIcon>
                           <strong className={styles.numberComment}>{video.comment.length}</strong>
                        </div>
                     </Link>

                     <div className={styles.userShare} onClick={()=>{
                        dispatch(inputZone.showComingSoon())
                     }}>
                        <FontAwesomeIcon className={styles.shareIcon} icon={faShare}></FontAwesomeIcon>
                        <strong className={styles.numberShare}>0</strong>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}

export default ListVideo;
