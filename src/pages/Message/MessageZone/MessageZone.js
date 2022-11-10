import { Fragment, useRef, useState } from 'react';
import Image from 'src/components/images';
import styles from './MessageZone.module.scss';
import { EmotionIcon, SendMessageIconRed } from 'src/components/Icon';
import { MessageList } from './MessageList';

function MessageZone({ data }) {
   const [enterValue, setEnterValue] = useState('');
   const [sending, setSending] = useState(false);
   let time = useRef(new Date(2000, 1, 1));

   const convertTime = (time, date) => {
      const day = date.split('-');
      const arr = time.split(' ');
      const arr1 = arr[0].split(':');
      if (arr[1] === 'PM') {
         arr1[0] += 12;
      }
      return new Date(day[2], day[1], day[0], arr1[0], arr1[1]);
   };

   const checkPreviousTime = (now, previous) => {
      time = now;
      const nowTime = convertTime(now.time, now.date).getTime();
      const previousTime = previous.current
         ? previous.current.getTime()
         : convertTime(previous.time, previous.date).getTime();
      const diffrence = nowTime - previousTime;

      if (diffrence > 300000) {
         return true;
      } else {
         return false;
      }
   };
   return (
      <div className={styles.wrapper}>
         {data && (
            <Fragment>
               <div className={styles.header}>
                  <Image src={data.img} className={styles.userImage} alt={data.mainName}></Image>
                  <div className={styles.userInfo}>
                     <div className={styles.userMainName}>{data.mainName}</div>
                     <div className={styles.userGmail}>@{data.mainName}</div>
                  </div>
               </div>
               <div className={styles.content}>
                  {data.comment.map((item) => {
                     if (checkPreviousTime(item, time)) {
                        item.timeVisible = true;
                     }
                  })}
                  <MessageList data={data.comment}></MessageList>
               </div>
               <div className={styles.message}>
                  <div className={styles.messageInput}>
                     <input
                        type="text"
                        value={enterValue}
                        onChange={(e) => {
                           const value = e.target.value;
                           setEnterValue(e.target.value);
                           if (value) {
                              setSending(true);
                           } else {
                              setSending(false);
                           }
                        }}
                        placeholder="Send a message..."
                     ></input>
                     <EmotionIcon className={styles.emotion}></EmotionIcon>
                  </div>
                  {sending && (
                     <SendMessageIconRed
                        className={styles.sendMessageButton}
                        onClick={() => {
                           setEnterValue('');
                           setSending(false);
                        }}
                     ></SendMessageIconRed>
                  )}
               </div>
            </Fragment>
         )}
      </div>
   );
}

export default MessageZone;
