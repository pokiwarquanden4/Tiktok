import styles from './UserVideo_Comment.module.scss';
import Image from 'src/components/images';
import { FlagIcon, FlagIconFill, Heart, HeartFill, ThreeDotIcon } from 'components/Icon';
import Tippy from '@tippyjs/react/headless';
import Wrapper from 'components/Poper/wrapper';
function UserVideo_Comment({ notHost }) {
   return (
      <div className={styles.comment_wrapper}>
         <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sP54Dj8ULdIjcK1xSZWAIHFaSkOlK57wMQ&usqp=CAU"
            alt="Quang"
            className={`${notHost ? styles.avatarNotHost : styles.avatar}`}
         ></Image>
         <div className={styles.mainContent}>
            <span className={styles.name}>Trần Minh Quang</span>
            <div className={styles.content}>Pokiwarquanden4</div>
            <div className={styles.response}>
               <div className={styles.date}>3-12</div>
               <div className={styles.answer}>Reply</div>
            </div>
         </div>
         <div className={styles.userAction}>
            <div className={styles.moreAction}>
               <Tippy
                  interactive
                  offset={[0, -3]}
                  placement="bottom-end"
                  render={(attrs) => (
                     <Wrapper className={styles.report}>
                        <FlagIcon className={styles.flagIcon}></FlagIcon>
                        {/* <FlagIconFill className={styles.flagIcon}></FlagIconFill> */}
                        <div className={styles.reportContent}>Report</div>
                     </Wrapper>
                  )}
               >
                  <span>
                     <ThreeDotIcon className={styles.threeDotIcon}></ThreeDotIcon>
                  </span>
               </Tippy>
            </div>
            <div className={styles.heartAction}>
               {true ? (
                  <Heart className={styles.heartIcon}></Heart>
               ) : (
                  <HeartFill className={styles.heartIconFill}></HeartFill>
               )}
               <div className={styles.heartNumber}>1000</div>
            </div>
         </div>
      </div>
   );
}

export default UserVideo_Comment;
