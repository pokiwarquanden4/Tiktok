import styles from './UserVideo.module.scss';
import { UserVideo_Content } from './UserVideo_Content';
import { UserVideo_Video } from './UserVideo_Video';
import { useParams } from 'react-router-dom';
import { userVideoLink } from 'api';
import { getOneUserByNameAPI, getOneVideoByVideoName } from 'api';
import { useEffect, useState } from 'react';

function UserVideo() {
   const params = useParams();
   const videoName = params.videoName;
   const nickName = params.nickname;

   const [user, setUser] = useState();
   const [video, setVideo] = useState();

   //Get User
   useEffect(() => {
      getOneUserByNameAPI(nickName).then((result) => {
         setUser(result.data);
      });
   }, []);

   //Get Video
   useEffect(() => {
      getOneVideoByVideoName(videoName).then((result) => {
         setVideo(result.data);
      });
   }, []);

   //Video Link
   const videoLink = userVideoLink(nickName + '/MainVideo/' + videoName);

   return (
      user &&
      video && (
         <div className={styles.wrapper}>
            <UserVideo_Video videoLink={videoLink}></UserVideo_Video>
            <UserVideo_Content user={user} video={video}></UserVideo_Content>
         </div>
      )
   );
}

export default UserVideo;
