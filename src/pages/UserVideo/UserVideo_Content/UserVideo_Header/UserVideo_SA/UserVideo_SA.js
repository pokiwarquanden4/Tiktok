import styles from './UserVideo_SA.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link, FaceBook, WhatsApp, Twitter, Path, LinkedIn, Telegram, Email, Line } from 'src/components/Icon';
import config from 'config';
import Tippy from '@tippyjs/react';
import Menu from 'components/Poper/Menu';
import { useRef } from 'react';

function UserVideo_SA({ comment, liker }) {
   const copyPathRef = useRef();

   const shareMenu = [
      { icon: <LinkedIn></LinkedIn>, title: 'Share to Linkedln', to: config.routes.home },
      { icon: <Telegram></Telegram>, title: 'Share to Telegram', to: config.routes.home },
      { icon: <Email></Email>, title: 'Share to Email', to: config.routes.home },
      { icon: <Line></Line>, title: 'Share to Line', to: config.routes.home },
   ];

   return (
      <div className={styles.main}>
         <div className={styles.wrapper}>
            <div className={styles.userAction}>
               <div className={styles.userHeart}>
                  <FontAwesomeIcon className={styles.heartIcon} icon={faHeart}></FontAwesomeIcon>
                  <strong className={styles.numberHeart}>{liker}</strong>
               </div>
               <div className={styles.userComment}>
                  <FontAwesomeIcon className={styles.commentIcon} icon={faCommentDots}></FontAwesomeIcon>
                  <strong className={styles.numberComment}>{comment}</strong>
               </div>
            </div>
            <div className={styles.share}>
               <Tippy offset={[0, -1]} content="Embed">
                  <span className={styles.shareIcon_wrapper}>
                     <Link className={styles.shareIcon}></Link>
                  </span>
               </Tippy>
               <Tippy offset={[0, -1]} content="Send To Friends">
                  <span className={styles.shareIcon_wrapper}>
                     <Path className={styles.shareIcon}></Path>
                  </span>
               </Tippy>
               <Tippy offset={[0, -1]} content="Share To Facebook">
                  <span className={styles.shareIcon_wrapper}>
                     <FaceBook className={styles.shareIcon}></FaceBook>
                  </span>
               </Tippy>
               <Tippy offset={[0, -1]} content="Share To WhatsApp">
                  <span className={styles.shareIcon_wrapper}>
                     <WhatsApp className={styles.shareIcon}></WhatsApp>
                  </span>
               </Tippy>
               <Tippy offset={[0, -1]} content="Share To Twitter">
                  <span className={styles.shareIcon_wrapper}>
                     <Twitter className={styles.shareIcon}></Twitter>
                  </span>
               </Tippy>
               <Menu items={shareMenu}>
                  <span className={styles.moreShare_wrapper}>
                     <FontAwesomeIcon icon={faShare} className={styles.moreShare}></FontAwesomeIcon>
                  </span>
               </Menu>
            </div>
         </div>
         <div className={styles.copyLink}>
            <div className={styles.link} ref={copyPathRef}>
               {window.location.href}
            </div>
            <button
               className={styles.copyButton}
               onClick={() => {
                  navigator.clipboard.writeText(copyPathRef.current.innerHTML);
               }}
            >
               Copy Link
            </button>
         </div>
      </div>
   );
}

export default UserVideo_SA;
