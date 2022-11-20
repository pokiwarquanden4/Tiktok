/* eslint-disable react/jsx-pascal-case */
import styles from './UserVideo_Content.module.scss';

import { UserVideo_Comments } from './UserVideo_Comments';
import { UserVideo_Header } from './UserVideo_Header';
import { UserVideo_Typing } from './UserVideo_Typing';
import { userAvatar } from 'api';
import { useSelector } from 'react-redux';
import { activeUserSelector } from 'redux/selectors/users';
import { useState } from 'react';

function UserVideo_Content({ video, user }) {
   const currentUser = useSelector(activeUserSelector);
   const [replyTo, setReplyTo] = useState(null);

   return (
      <div className={styles.content}>
         <UserVideo_Header
            avatar={userAvatar(user.nickName + '/' + user.avatar)}
            nickName={user.nickName}
            full_name={user.full_name}
            followed={currentUser.following.indexOf(user.nickName) === -1 ? false : true}
            comment={video.comment.length}
            liker={video.liker.length}
         ></UserVideo_Header>
         <div className={styles.comment_wrapper}>
            {video.comment.map((comments, number) => (
               <UserVideo_Comments setReplyTo={setReplyTo} key={number} comments={comments}></UserVideo_Comments>
            ))}
         </div>
         <UserVideo_Typing replyTo={replyTo} user={user}></UserVideo_Typing>
      </div>
   );
}

export default UserVideo_Content;
