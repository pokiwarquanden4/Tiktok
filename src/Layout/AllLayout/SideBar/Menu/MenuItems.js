import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuItems({ title, to, icon, ...passprops }) {
   let Wrapper = 'button';
   const props = {
      ...passprops,
   };

   const classes = `${styles.items}`;
   const activeClass = `${styles.active}`;

   if (to) {
      props.to = to;
      Wrapper = NavLink;
   }

   return (
      <Wrapper className={(nav) => (nav.isActive ? classes + ' ' + activeClass : classes)} {...props}>
         <span className={styles.iconActive}>{icon.iconActive}</span>
         <span className={styles.iconUnActive}>{icon.iconUnActive}</span>
         <span className={styles.title}>{title}</span>
      </Wrapper>
   );
}

MenuItems.propTypes = {
   title: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
};

export default MenuItems;
