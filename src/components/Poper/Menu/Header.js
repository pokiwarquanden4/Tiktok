import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

function Header({ title, onBack }) {
   return (
      <header className={styles.header}>
         <button className={styles.backIcon} onClick={onBack}>
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
         </button>
         <h4 className={styles.header__title}>{title}</h4>
      </header>
   );
}

Header.propTypes = {
   title: PropTypes.string,
   onBack: PropTypes.func,
};

export default Header;
