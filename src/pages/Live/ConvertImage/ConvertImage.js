import styles from './ConvertImage.module.scss';

function ConvertImage({ className, src }) {
   const classes = `${styles.wrapper} ${className && ([styles.className] = className)}`;
   return (
      <div className={classes}>
         <img src={src} className={styles.image}></img>
      </div>
   );
}

export default ConvertImage;
