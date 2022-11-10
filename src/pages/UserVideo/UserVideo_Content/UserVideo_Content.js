import styles from './UserVideo_Content.module.scss';

import { UserVideo_Comments } from './UserVideo_Comments';
import { UserVideo_Header } from './UserVideo_Header';
import { UserVideo_Typing } from './UserVideo_Typing';

function UserVideo_Content({ followed }) {
   return (
      <div className={styles.content}>
         <UserVideo_Header></UserVideo_Header>
         <div className={styles.comment_wrapper}>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
            <UserVideo_Comments></UserVideo_Comments>
         </div>
         <UserVideo_Typing></UserVideo_Typing>
      </div>
   );
}

export default UserVideo_Content;
