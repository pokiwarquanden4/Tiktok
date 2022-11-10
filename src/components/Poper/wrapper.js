import styles from './Poper.module.scss';
import PropTypes from 'prop-types';
function wrapper({ children, flexcolumn__left, flexcolumn__right, flexRow, className }) {
   const classes = `${styles.wrapper} ${flexcolumn__left ? styles.flexcolumn__left : ''} ${
      flexcolumn__right ? styles.flexcolumn__right : ''
   } ${flexRow ? styles.flexRow : ''} ${className ? ([styles.className] = className) : ''}`;

   return <div className={classes}>{children}</div>;
}

wrapper.propTypes = {
   children: PropTypes.node.isRequired,
   flexcolumn__left: PropTypes.bool,
   flexcolumn__right: PropTypes.bool,
   flexRow: PropTypes.bool,
   className: PropTypes.string,
};

export default wrapper;
