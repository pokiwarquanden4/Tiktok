import styles from './FullScreenLayout.module.scss';
import Header from '../AllLayout/Header';

function FullScreenLayout({ children }) {
   return (
      <div className={styles.wrapper}>
         <Header fullScreen className={styles.header}></Header>
         <div className={styles.contener}>
            <div className={styles.content}>{children}</div>
         </div>
      </div>
   );
}

export default FullScreenLayout;
