import Header from '../AllLayout/Header';

import styles from './HeaderOnly.module.scss';

function HeaderOnly({ children }) {
   return (
      <div className={styles.wrapper}>
         <Header className={styles.header}></Header>
         <div className={styles.contener}>
            <div className={styles.content}>{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnly;
