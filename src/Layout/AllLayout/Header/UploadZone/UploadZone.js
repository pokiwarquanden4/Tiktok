import { Link } from 'react-router-dom';
import config from 'src/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';
import styles from './UploadZone.module.scss';

function UploadZone() {
   return (
      <Link to={config.routes.UpLoad}>
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
