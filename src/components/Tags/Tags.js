import styles from './Tags.module.scss';
import { PageIconDiscover, MusicIconDiscover } from 'src/components/Icon';

function Tags({ item, className, blackWhite, onClick }) {
   const classes = `${styles.discover} ${className ? (styles.className = className) : ''} ${
      blackWhite ? styles.blackWhite : ''
   }`;
   const Tag = item.link ? 'a' : 'div';

   return (
      <Tag href={item.link} className={classes} onClick={onClick}>
         {item.type === 'page' && <PageIconDiscover className={styles.icon}></PageIconDiscover>}
         {item.type === 'music' && <MusicIconDiscover className={styles.icon}></MusicIconDiscover>}
         <span className={styles.content}>{item.content}</span>
      </Tag>
   );
}

export default Tags;
