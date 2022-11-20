import Button from 'src/components/Button';
import { Wrapper } from 'src/components/Poper';
import styles from './Upload.module.scss';
import { Caption } from './Caption';
import { Cover } from './Cover';
import { WhoView } from './WhoView';
import { AllowUser } from './AllowUser';
import { ConfirmButton } from './ConfirmButton';
import { CopyRight } from './CopyRight';
import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeUserSelector, activeUserLoadingSelector } from 'redux/selectors/users';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { Video } from 'components/Video';
import { userTempVideo } from 'api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { LoadingAnimation } from 'components/LoadingAnimation';

function Upload() {
   const dispatch = useDispatch();
   const user = useSelector(activeUserSelector);
   const videoLoading = useSelector(activeUserLoadingSelector);

   //VideoLink
   const [videoLink, setVideoLink] = useState();

   //Video
   const [video, setVideo] = useState();

   //Caption
   const [captionValue, setCaptionValue] = useState([]);

   //Cover
   const [coverPic, setCoverPic] = useState();

   //Who View
   const [dropSelector, setDropSelector] = useState(1);

   //Allow User
   const [allowUser, setAllowUser] = useState([]);

   //Copy Right
   const [button, setButton] = useState(false);

   //Submit
   const [submitEnable, setSubmitEnable] = useState(false);

   useEffect(() => {
      if (user.nickName && user.uploadTempVideo.video) {
         setSubmitEnable(true);
      }
   });

   //Dispatch
   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         if (user.uploadTempVideo.video) {
            setVideoLink(userTempVideo(user.nickName + '/TempVideo/' + user.uploadTempVideo.video));
         } else {
            setVideoLink(null);
         }
         setVideo(user.uploadTempVideo.video);
      }
   }, [user]);

   //Dispatch
   useEffect(() => {
      if (video && typeof video !== 'string') {
         const formData = new FormData();
         formData.append('nickName', user.nickName);
         formData.append('video', video);
         dispatch(activeUser.getUploadTempVideoRequest(formData));
      }
   }, [video]);

   const handleSubmit = () => {
      const getWhoView = () => {
         switch (dropSelector) {
            case 1:
               return 'Public';
            case 2:
               return 'Friends';
            case 3:
               return 'Private';
            default:
               return 'null';
         }
      };
      const getMentions = () => {
         const results = [];
         captionValue.forEach((item) => {
            if (item.indexOf('@') !== -1) {
               results.push(item);
            }
         });
         return results;
      };

      const formData = {
         nickName: user.nickName,
         captions: captionValue,
         mentions: getMentions(),
         video: user.uploadTempVideo.video,
         coverPic: 'ddđ',
         whoView: getWhoView(),
         allowUser: allowUser,
         runACopy: button,
      };

      dispatch(activeUser.getUploadVideoRequest(formData));
      dispatch(activeUser.deleteUploadTempVideoSuccess('OK'));
   };

   return (
      <div className={styles.wrapper}>
         <Wrapper className={styles.container}>
            <strong className={styles.header}>Upload video</strong>
            <span className={styles.subHeader}>Post a video to your account</span>
            <div className={styles.main}>
               {!video ? (
                  <Fragment>
                     <label htmlFor="uploads_UploadVideo">
                        <div className={styles.uploadVideo}>
                           <div className={styles.uploadZone}>
                              {videoLoading ? (
                                 <LoadingAnimation></LoadingAnimation>
                              ) : (
                                 <Fragment>
                                    <div className={styles.uploadIcon}>
                                       <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"></img>
                                    </div>
                                    <div className={styles.uploadTitle}>Select video to upload</div>
                                    <span className={styles.uploadSubTitle}>Or drag and drop a file</span>
                                    <span className={styles.uploadType}>MP4 or WebM</span>
                                    <span className={styles.uploadResolution}>720x1280 resolution or higher</span>
                                    <span className={styles.uploadLimitTime}>Up to 10 minute</span>
                                    <span className={styles.uploadStorage}>Less than 2 GB</span>
                                    <Button primary className={styles.uploadButton}>
                                       Select file
                                    </Button>
                                 </Fragment>
                              )}
                           </div>
                        </div>
                     </label>
                     <input
                        type="file"
                        id="uploads_UploadVideo"
                        accept="video/mp4"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                           setVideo(e.target.files[0]);
                        }}
                     ></input>
                  </Fragment>
               ) : (
                  <div className={styles.videoWrapper}>
                     <div className={styles.videoSize}>
                        <Video autoPlay={true} noComment videoUploadLink={videoLink} videoResize></Video>
                     </div>
                     <div className={styles.changeVideo}>
                        <div className={styles.checkIcon}>
                           <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                        </div>
                        <div className={styles.changeVideo_title}>{user.uploadTempVideo.video}</div>
                        <label className={styles.changeVideo_button} htmlFor="uploads_changeVideo">
                           Change video
                        </label>
                        <input
                           type="file"
                           id="uploads_changeVideo"
                           accept="video/mp4"
                           style={{ display: 'none' }}
                           onChange={(e) => {
                              dispatch(
                                 activeUser.deleteUploadTempVideoRequest({
                                    nickName: user.nickName,
                                    videoName: user.uploadTempVideo.video,
                                 }),
                              );
                              setVideo(e.target.files[0]);
                           }}
                        ></input>
                     </div>
                  </div>
               )}

               <div className={styles.info}>
                  <Caption captionValue={captionValue} setCaptionValue={setCaptionValue}></Caption>
                  <Cover videoLink={videoLink} coverPic={coverPic} setCoverPic={setCoverPic}></Cover>
                  <WhoView dropSelector={dropSelector} setDropSelector={setDropSelector}></WhoView>
                  <AllowUser allowUser={allowUser} setAllowUser={setAllowUser}></AllowUser>
                  <CopyRight button={button} setButton={setButton}></CopyRight>
                  <ConfirmButton
                     submitEnable={submitEnable}
                     setSubmitEnable={setSubmitEnable}
                     handleSubmit={handleSubmit}
                  ></ConfirmButton>
               </div>
            </div>
         </Wrapper>
      </div>
   );
}

export default Upload;
