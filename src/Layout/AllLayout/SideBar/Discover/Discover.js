import styles from './Discover.module.scss';
import DiscoverList from './DiscoverList/DiscoverList';

function Discover({ data }) {
   return (
      <div flexcolumn="true" className={styles.wrapper}>
         <h4 className={styles.title}>Discover</h4>
         <DiscoverList data={data}></DiscoverList>
      </div>
   );
}

export default Discover;
