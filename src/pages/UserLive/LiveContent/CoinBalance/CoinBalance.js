import styles from './CoinBalance.module.scss';
import { Coin } from 'components/Icon/UserLiveIcon';
import Button from 'components/Button';

function CoinBalance() {
   return (
      <div className={styles.wrapper}>
         <span className={styles.content}>Coin Balance: </span>
         <span className={styles.numberCoin}>0</span>
         <Coin className={styles.coin}></Coin>
         <Button follow className={styles.button}>
            Get Coins
         </Button>
      </div>
   );
}

export default CoinBalance;
