import Header from '../AllLayout/Header';
import SideBar from '../AllLayout/SideBar';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import { LoginSignUpForm } from 'components/LoginSignUpForm';

function DefaultLayout({ children }) {
   return (
      <div className={styles.wrapper}>
         <LoginSignUpForm></LoginSignUpForm>
         <Header className={styles.header}></Header>
         <div className={styles.contener}>
            <SideBar></SideBar>
            <div className={styles.content}>{children}</div>
         </div>
      </div>
   );
}

DefaultLayout.propTypes = {
   children: PropTypes.node,
};

export default DefaultLayout;
