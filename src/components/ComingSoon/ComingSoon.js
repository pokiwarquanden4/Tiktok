import { InputZone } from 'components/InputZone';
import { useSelector } from 'react-redux';
import { inputZoneSelector } from 'redux/selectors/inputZoneSelector';
import styles from './ComingSoon.module.scss';

function ComingSoon() {
   const visibleStatus = useSelector(inputZoneSelector).comingSoon

   return !visibleStatus && <InputZone width="400px" height="150px" type='comingSoon'><div className={styles.content}>Coming Soon !!!</div></InputZone>;
}

export default ComingSoon;
