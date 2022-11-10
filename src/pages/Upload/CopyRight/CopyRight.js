import styles from './CopyRight.module.scss';
import { NoticeIcon } from 'src/components/Icon';

function CopyRight({ button, setButton }) {
   return (
      <div className={styles.copyRight}>
         <div className={styles.copyRight_header}>
            <div className={styles.copyRight_title}>Run a copyright check</div>
            <div
               className={`${styles.copyRight_switch} `}
               onClick={(e) => {
                  if (button) {
                     e.currentTarget.classList.remove(`${styles.buttonOn}`);
                     e.currentTarget.classList.add(`${styles.buttonOff}`);
                     setButton(false);
                  } else {
                     e.currentTarget.classList.remove(`${styles.buttonOff}`);
                     e.currentTarget.classList.add(`${styles.buttonOn}`);
                     setButton(true);
                  }
               }}
            >
               <div className={styles.copyRight_button}></div>
            </div>
         </div>
         <div className={`${styles.copyRight_body} ${button && styles.copyRight_body_active}`}>
            {!button ? (
               <div className={styles.copyRight_titleOff}>
                  We'll check your video for potential copyright infringements on used sounds. If infringements are
                  found, you can edit the video before posting.{' '}
                  <strong className={styles.copyRight_learMore}>Learn More</strong>
               </div>
            ) : (
               <div className={styles.copyRight_titleOn}>
                  <NoticeIcon></NoticeIcon>
                  <div className={styles.copyRight_titleOn_Active}>
                     Copyright check will not begin until your video is uploaded.
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default CopyRight;
