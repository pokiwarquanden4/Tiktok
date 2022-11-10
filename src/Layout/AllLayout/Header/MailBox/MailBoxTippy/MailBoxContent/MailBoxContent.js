import { Fragment } from 'react';
import styles from './MailBoxContent.module.scss';
import { Likes } from './Likes';
import { Comments } from './Comments';
import { MentionAndTags } from './MentionAndTags';
import { Followers } from './Followers';

function MailBoxContent({ data, type }) {
   const today = ['Today'];
   const previous = ['Previous'];
   const content = [];
   const todayData = [];
   const previousData = [];

   const checkDate = (time) => {
      const currentDate = new Date();
      const arr = time.split('-');
      const date = new Date(arr[2], arr[1], arr[0]);

      return currentDate > date ? true : false;
   };
   const sub_Name = (value) => {
      switch (type) {
         case 2:
            return 'Follows You. ' + value;
         case 3:
            return 'Follows You. ' + value;
         case 4:
            return 'Follows You. ' + value;
         case 5:
            return 'Follows You ' + value;
         default:
            return 'Follows You ' + value;
      }
   };
   const message = (name, value, time) => {
      switch (type) {
         case 2:
            return name + ': ' + value + ' ' + time;
         case 3:
            return name + ': ' + value + ' ' + time;
         case 4:
            return name + ': ' + value + ' ' + time;
         case 5:
            return name + ': ' + value + ' ' + time;
         default:
            return name + ': ' + value + ' ' + time;
      }
   };
   const typeDefine = () => {
      switch (type) {
         case 2:
            return data.likes;
         case 3:
            return data.comments;
         case 4:
            return data.mentionAndTags;
         case 5:
            return data.follower;
         default:
            return data.likes;
      }
   };

   typeDefine().data.map((item) => {
      let value = checkDate(item.startTime) ? false : true;
      if (value) {
         todayData.push(item);
      } else {
         previousData.push(item);
      }
   });
   today.push(todayData);
   previous.push(previousData);
   content.push(today);
   content.push(previous);

   return (
      <Fragment>
         <div className={styles.time_topic}>
            {content.map((time) => {
               return (
                  <Fragment key={time[0]}>
                     {time[1].length > 0 && <div className={styles.title}>{time[0]}</div>}
                     {type === 1 && <Likes time={time}></Likes>}
                     {type === 2 && <Likes time={time}></Likes>}
                     {type === 3 && <Comments time={time}></Comments>}
                     {type === 4 && <MentionAndTags time={time}></MentionAndTags>}
                     {type === 5 && <Followers time={time}></Followers>}
                  </Fragment>
               );
            })}
         </div>
      </Fragment>
   );
}

export default MailBoxContent;
