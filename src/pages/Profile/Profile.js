import styles from './Profile.module.scss';
import SideBar from 'src/Layout/AllLayout/SideBar';
import { Locker, Human } from 'src/components/Icon';
import { useEffect, useState } from 'react';
import { VideoList } from './VideoList';
import { UserInfo } from './UserInfo';
import { useParams } from 'react-router-dom';
import { getOneUserByNameAPI } from 'api';
import { LoadingAnimation } from 'components/LoadingAnimation';

function Profile() {
   const [content, setContent] = useState(1);
   const params = useParams();
   var [currentUser, setCurrentUser] = useState();

   useEffect(() => {
      getOneUserByNameAPI(params.nickname).then((result) => {
         setCurrentUser(result.data);
      });
   }, [params.nickname]);

   return (
      <div className={styles.wrapper}>
         <SideBar smallSize noHoverAction className={styles.menu}></SideBar>
         {currentUser ? (
            <div className={styles.main}>
               <UserInfo user={currentUser}></UserInfo>
               <div className={styles.content}>
                  <div className={styles.changeBar}>
                     <div
                        className={`${styles.videoButton} ${content === 1 && styles.active}`}
                        onClick={() => {
                           setContent(1);
                        }}
                     >
                        <div className={styles.locker}>
                           <Locker></Locker>
                        </div>
                        <div className={styles.videoButton_content}>Video</div>
                     </div>
                     <div
                        className={`${styles.likedButton} ${content === 2 && styles.active}`}
                        onClick={() => {
                           setContent(2);
                        }}
                     >
                        <div className={styles.locker}>
                           <Locker></Locker>
                        </div>
                        <div className={styles.likedButton_content}>Liked</div>
                     </div>
                     <div className={styles.slideBar}>
                        <div
                           className={`${styles.slider} ${content === 1 ? styles.activeLeft : styles.activeRight}`}
                        ></div>
                     </div>
                  </div>

                  {content === 1 ? (
                     currentUser.video.length !== 0 ? (
                        <VideoList nickName={currentUser.nickName}></VideoList>
                     ) : (
                        <div className={styles.mainContent_noData}>
                           <div className={styles.humanIcon}>
                              <Human></Human>
                           </div>
                           <div className={styles.noData_mainTitle}>No content</div>
                           <div className={styles.noData_subTitle}>This user has not published any videos.</div>
                        </div>
                     )
                  ) : currentUser.likeVideo.length !== 0 ? (
                     <VideoList nickName={currentUser.nickName}></VideoList>
                  ) : (
                     <div className={styles.mainContent_noData}>
                        <div className={styles.humanIcon}>
                           <Human></Human>
                        </div>
                        <div className={styles.noData_mainTitle}>No content</div>
                        <div className={styles.noData_subTitle}>This user has not published any videos.</div>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <LoadingAnimation></LoadingAnimation>
         )}
      </div>
   );
}

export default Profile;
