import { DownIcon } from 'src/components/Icon';
import { useState } from 'react';
import styles from './WhoView.module.scss';
import { Wrapper } from 'src/components/Poper';

function WhoView({ dropSelector, setDropSelector }) {
   const [drop, setDrop] = useState(false);

   const getDropItem = () => {
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
   return (
      <div className={styles.whoView}>
         <div className={styles.whoView_header}>
            <div className={styles.whoView_title}>Who can view this video</div>
         </div>
         <div
            className={styles.whoView_body}
            onClick={(e) => {
               if (drop) {
                  e.currentTarget.classList.remove(`${styles.iconDown}`);
                  e.currentTarget.classList.add(`${styles.iconUp}`);
                  setDrop(false);
               } else {
                  e.currentTarget.classList.remove(`${styles.iconUp}`);
                  e.currentTarget.classList.add(`${styles.iconDown}`);
                  setDrop(true);
               }
            }}
         >
            <div className={styles.whoView_inputTitle}>{getDropItem()}</div>
            <DownIcon className={`${styles.whoView_icon}`}></DownIcon>
            <Wrapper className={`${styles.whoView_dropBox} ${drop && styles.selected}`}>
               <div
                  className={`${styles.whoView_dropBox_item} ${dropSelector === 1 && styles.whoView_item_active}`}
                  onClick={() => {
                     setDropSelector(1);
                  }}
               >
                  Public
               </div>
               <div
                  className={`${styles.whoView_dropBox_item} ${dropSelector === 2 && styles.whoView_item_active}`}
                  onClick={() => {
                     setDropSelector(2);
                  }}
               >
                  Friends
               </div>
               <div
                  className={`${styles.whoView_dropBox_item} ${dropSelector === 3 && styles.whoView_item_active}`}
                  onClick={() => {
                     setDropSelector(3);
                  }}
               >
                  Private
               </div>
            </Wrapper>
         </div>
      </div>
   );
}

export default WhoView;
