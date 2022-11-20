import styles from './LoadingAnimation.module.scss';

function LoadingAnimation({ className, smallSize, bigSize }) {
   return (
      <div className={styles.wrapper}>
         <div className={styles.lds_default}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}

export default LoadingAnimation;
