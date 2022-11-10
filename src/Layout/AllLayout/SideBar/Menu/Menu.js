import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import styles from './Menu.module.scss';

function Menu({ data }) {
   return (
      <nav className={styles.wrapper}>
         {data.map((results) => {
            return <MenuItems key={results.id} title={results.title} to={results.to} icon={results.icon}></MenuItems>;
         })}
         <span className={styles.viewMore}>View More...</span>
      </nav>
   );
}

Menu.propTypes = {
   data: PropTypes.array.isRequired,
};

export default Menu;
