import { Wrapper } from 'src/components/Poper';
import styles from './Message.module.scss';
import { SettingIcon } from 'src/components/Icon';
import { useState } from 'react';
import { MessageUser } from './MessageUser';
import { MessageZone } from './MessageZone';

function Message() {
   const data = [
      {
         id: 1,
         img: '/',
         mainName: 'Đặng Quang Dương',
         comment: [
            {
               id: 1,
               title: 'Hello',
               time: '10:10 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 2,
               title: 'Địt Mẹ Mày',
               time: '10:12 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 3,
               title: 'Fuck You',
               time: '10:14 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 4,
               title: 'DDDD',
               time: '10:15 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 5,
               title: 'DragonBall',
               time: '10:17 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 6,
               title: 'Hello!!!',
               time: '10:19 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 7,
               title: 'Bye',
               time: '10:30 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
         ],
      },
      {
         id: 2,
         img: '/',
         mainName: 'Trần Minh Quang',
         comment: [
            {
               id: 1,
               title: 'Hello',
               time: '10:10 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 2,
               title: 'Địt Mẹ Mày',
               time: '10:12 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 3,
               title: 'Fuck You',
               time: '10:14 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 4,
               title: 'DDDD',
               time: '10:15 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 5,
               title: 'DragonBall',
               time: '10:17 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 6,
               title: 'Hello!!!',
               time: '10:44 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
               guest: true,
            },
            {
               id: 7,
               title: 'Bye',
               time: '10:45 PM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
         ],
      },
      {
         id: 3,
         img: '/',
         mainName: 'Nguyễn Khoa Đoàn',
         comment: [
            {
               id: 1,
               title: 'Hello',
               time: '10:10 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 2,
               title: 'Địt Mẹ Mày',
               time: '10:12 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 3,
               title: 'Fuck You',
               time: '10:14 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 4,
               title: 'DDDD',
               time: '10:15 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 5,
               title: 'DragonBall',
               time: '10:17 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 6,
               title: 'Hello!!!',
               time: '10:19 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 7,
               title: 'Bye',
               time: '10:30 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
         ],
      },
      {
         id: 4,
         img: '/',
         mainName: 'Nguyễn Khoa Đoàn',
         comment: [
            {
               id: 1,
               title: 'Hello',
               time: '10:10 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 2,
               title: 'Địt Mẹ Mày',
               time: '10:12 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 3,
               title: 'Fuck You',
               time: '10:14 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 4,
               title: 'DDDD',
               time: '10:15 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 5,
               title: 'DragonBall',
               time: '10:17 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 6,
               title: 'Hello!!!',
               time: '10:19 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
            {
               id: 7,
               title: 'Bye',
               time: '10:30 AM',
               date: '9-5-2002',
               img: '/',
               mainName: 'Nguyễn Khoa Đoàn',
            },
         ],
      },
   ];
   const [currentUser, setCurrenUser] = useState(0);
   const getUserData = () => {
      let value;
      data.forEach((item) => {
         if (item.id === currentUser) {
            value = item;
         }
      });
      return value;
   };

   return (
      <div className={styles.wrapper}>
         <Wrapper className={styles.listUser}>
            <div className={styles.header}>
               <h3 className={styles.header_title}>Messages</h3>
               <span className={styles.settingIcon}>
                  <SettingIcon></SettingIcon>
               </span>
            </div>
            <div className={styles.content}>
               {!data && <p className={styles.noMessage}>No messages yet</p>}
               {data &&
                  data.map((user) => {
                     return (
                        <MessageUser
                           key={user.id}
                           data={user}
                           active={currentUser === user.id}
                           onClick={() => {
                              setCurrenUser(user.id);
                           }}
                        ></MessageUser>
                     );
                  })}
            </div>
         </Wrapper>
         <Wrapper className={styles.messageZone}>
            <MessageZone data={getUserData()}></MessageZone>
         </Wrapper>
      </div>
   );
}

export default Message;
