import Button from 'src/components/Button';
import { Wrapper } from 'src/components/Poper';
import styles from './Upload.module.scss';
import { Caption } from './Caption';
import { Cover } from './Cover';
import { WhoView } from './WhoView';
import { AllowUser } from './AllowUser';
import { ConfirmButton } from './ConfirmButton';
import { CopyRight } from './CopyRight';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/users';

function Upload() {
   const user = useSelector(activeUserSelector);

   //Caption
   const [captionValue, setCaptionValue] = useState('');

   //Video
   const [video, setVideo] = useState();

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

      const formData = new FormData();
      formData.append('caption', captionValue);
      formData.append('video', video);
      // formData.append('cover', captionValue)
      formData.append('whoView', getWhoView());
      formData.append('allowUser', allowUser);
   };

   return (
      <div className={styles.wrapper}>
         <Wrapper className={styles.container}>
            <strong className={styles.header}>Upload video</strong>
            <span className={styles.subHeader}>Post a video to your account</span>
            <div className={styles.main}>
               <label htmlFor="uploads_UploadVideo">
                  <div className={styles.uploadVideo}>
                     <div className={styles.uploadZone}>
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
                     </div>
                  </div>
               </label>
               <input
                  type="file"
                  id="uploads_UploadVideo"
                  onChange={(e) => {
                     setVideo(e.target.files[0]);
                  }}
               ></input>
               <div className={styles.info}>
                  <Caption captionValue={captionValue} setCaptionValue={setCaptionValue}></Caption>
                  <Cover></Cover>
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
