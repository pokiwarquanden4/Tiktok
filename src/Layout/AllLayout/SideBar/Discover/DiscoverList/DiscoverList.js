import styles from './DiscoverList.module.scss';
import Tags from 'src/components/Tags/Tags';

function DiscoverList({ data }) {
   return (
      <div className={styles.wrapper}>
         {data.map((item) => {
            return <Tags item={item} key={item.id}></Tags>;
         })}
      </div>
   );
}

export default DiscoverList;
