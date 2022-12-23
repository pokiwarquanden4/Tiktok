import { Link } from 'react-router-dom';
import config from 'src/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import styles from './UploadZone.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { activeUserSelector } from 'redux/selectors/usersSelector';

function UploadZone() {
   const dispatch = useDispatch();
   const currentUser = useSelector(activeUserSelector);

   return (
      <Link
         to={config.routes.UpLoad}
         onClick={(e) => {
            if (currentUser && Object.keys(currentUser).length === 0) {
               dispatch(inputZone.showLoginSignUp());
               e.preventDefault();
            }
         }}
      >
         <Button
            textColorChanging
            text
            leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
            className={styles.button}
         >
            Upload
         </Button>
      </Link>
   );
}

export default UploadZone;
