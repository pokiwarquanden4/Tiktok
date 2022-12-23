/* eslint-disable react/jsx-pascal-case */
import styles from './UserVideo_Comments.module.scss';
import UserVideo_Comment from './UserVideo_Comment/UserVideo_Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useCallback, useState } from 'react';
function UserVideo_Comments({ comments, setReplyTo, video }) {
   const [currentShow, setCurrentShow] = useState(0);

   const handleCurrentShow = useCallback(() => {
      setCurrentShow(currentShow + 3);
   });

   return (
      <div className={styles.wrapper}>
         <UserVideo_Comment setReplyTo={setReplyTo} data={comments} video={video}></UserVideo_Comment>
         {comments.reply.length !== 0 &&
            (!currentShow ? (
               <div className={styles.responses} onClick={handleCurrentShow}>
                  <div className={styles.responses_expan}>View more replies ({comments.reply.length})</div>
                  <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
               </div>
            ) : (
               <Fragment>
                  {comments.reply.map((comment, index) => {
                     if (index + 1 <= currentShow) {
                        return (
                           <UserVideo_Comment
                              setReplyTo={setReplyTo}
                              key={index}
                              notHost={true}
                              data={comment}
                              video={video}
                           ></UserVideo_Comment>
                        );
                     }
                  })}

                  <div className={styles.viewMore_wrapper}>
                     <div className={styles.viewMore} onClick={handleCurrentShow}>
                        <div className={styles.viewMore_content}>View more</div>
                        <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
                     </div>
                     <div
                        className={styles.hide}
                        onClick={() => {
                           setCurrentShow(0);
                        }}
                     >
                        <div className={styles.hide_content}>Hide</div>
                        <FontAwesomeIcon icon={faChevronDown} className={styles.arrowIcon}></FontAwesomeIcon>
                     </div>
                  </div>
               </Fragment>
            ))}
      </div>
   );
}

export default UserVideo_Comments;
