import Button from 'src/components/Button';
import styles from './ConfirmButton.module.scss';

function ConfirmButton({ submitEnable, setSubmitEnable, handleSubmit }) {
   return (
      <div className={styles.confirmButton}>
         <Button text className={styles.confirmButton_discard}>
            Discard
         </Button>
         <Button
            primary={submitEnable}
            disabled={!submitEnable}
            className={styles.confirmButton_post}
            onClick={submitEnable ? handleSubmit : null}
         >
            Post
         </Button>
      </div>
   );
}

export default ConfirmButton;
