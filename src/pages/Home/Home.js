import styles from './Home.module.scss';
import { ListVideo } from 'src/components/ListVideo';

function Home() {
   return (
      <div className={styles.wrapper}>
         <ListVideo></ListVideo>
         <ListVideo></ListVideo>
         <ListVideo></ListVideo>
         <ListVideo></ListVideo>
      </div>
   );
}

export default Home;
