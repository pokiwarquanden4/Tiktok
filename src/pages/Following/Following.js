import styles from './Following.module.scss';
import { ListVideo } from 'src/components/ListVideo';

function Following() {
   return (
      <div className={styles.wrapper}>
         <ListVideo followed></ListVideo>
         <ListVideo followed></ListVideo>
         <ListVideo followed></ListVideo>
         <ListVideo followed></ListVideo>
      </div>
   );
}

export default Following;
