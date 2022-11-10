import styles from './MoreInfo.module.scss';
import PropTypes from 'prop-types';

function MoreInfo({ data }) {
   return (
      <div className={styles.wrapper}>
         {data.map((items) => {
            return (
               <div className={styles.header} key={items.id}>
                  {items.data.map((item) => {
                     return (
                        <a className={styles.content} key={item.id} href={item.link}>
                           {item.title}
                        </a>
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
}

MoreInfo.propTypes = {
   data: PropTypes.array.isRequired,
};

export default MoreInfo;
