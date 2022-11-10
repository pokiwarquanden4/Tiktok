import Button from 'src/components/Button';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

function ListMenuItem({ data, onClick }) {
   const separate = data.separate;
   const classes = `${styles.menuItems} ${separate ? styles.separate : ''}`;

   return (
      <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
         {data.title}
      </Button>
   );
}

ListMenuItem.propTypes = {
   data: PropTypes.object,
   onClick: PropTypes.func,
};

export default ListMenuItem;
