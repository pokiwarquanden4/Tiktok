import styles from './LoadingAnimation.module.scss';

function LoadingAnimation({ className, smallSize, bigSize }) {
   const classes = `${styles.wrapper} ${smallSize && styles.smallSize} ${bigSize && styles.bigSize}`;

   return (
      <div className={styles.wrapper}>
         !{/* !<div className={styles.ball_1} style={ballStyles}></div> */}
         <div className={styles.ball_2}></div>
      </div>
   );
}

export default LoadingAnimation;
