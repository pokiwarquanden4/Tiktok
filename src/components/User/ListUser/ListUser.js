import { useState } from 'react';
import AccountItem from 'src/components/AccountItem';
import styles from './ListUser.module.scss';

function ListUser({ data, type, noHoverAction, listForLive }) {
   const [viewMore, setViewMore] = useState(false);
   const expand = () => {
      if (viewMore) {
         setViewMore(false);
      } else {
         setViewMore(true);
      }
   };
   const listUser = viewMore ? data : data.slice(0, 5);

   return (
      <div flexcolumn="true" className={styles.wrapper}>
         <h4 className={styles.title}>{type}</h4>
         {data.length > 0 ? (
            listUser.map((user) => {
               return (
                  <AccountItem
                     className={styles.recommendAccount}
                     classNameImage={styles.image}
                     data={user}
                     key={user._id}
                     tippy={noHoverAction}
                     listForLive={listForLive}
                  ></AccountItem>
               );
            })
         ) : (
            <div className={styles.emptyMessage}>Accounts you follow will appear here</div>
         )}
         {data.length > 5 && !viewMore && (
            <span onClick={expand} className={styles.viewMore}>
               See More...
            </span>
         )}
         {data.length > 5 && viewMore && (
            <span onClick={expand} className={styles.viewMore}>
               See Less...
            </span>
         )}
      </div>
   );
}

export default ListUser;
