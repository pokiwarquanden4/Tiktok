import { Link } from 'react-router-dom';
import styles from './AccountRecommend.module.scss';
import Image from 'src/components/images';
function AccountRecommend() {
   return (
      <Link to="/" className={styles.wrapper}>
         <Image src="/" alt="error"></Image>
      </Link>
   );
}

export default AccountRecommend;
