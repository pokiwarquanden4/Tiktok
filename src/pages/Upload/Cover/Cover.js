import styles from './Cover.module.scss';

function Cover() {
   return (
      <div className={styles.cover}>
         <div className={styles.cover_header}>
            <div className={styles.cover_title}>Cover</div>
         </div>
         <div className={styles.cover_body}>
            <div className={styles.cover_Input}>
               <div className={styles.cover_video}></div>
            </div>
         </div>
      </div>
   );
}

export default Cover;
