import { MailBoxIcon } from 'src/components/Icon';
import MessageTippy from '@tippyjs/react';
import styles from './MailBox.module.scss';
import Tippy from '@tippyjs/react/headless';
import { MailBoxTippy } from './MailBoxTippy';
import { Actions, Likes, Comments, MentionsAndTags, Followers } from 'src/components/Icon';
import { Fragment } from 'react';

function MailBox() {
   const fakeAPI = {
      noData: [
         {
            id: 1,
            content: 'All Activity',
            nonIcon: <Actions></Actions>,
            non: 'All activity',
            nonSub: 'Notifications about your account will appear here.',
         },
         {
            id: 2,
            content: 'Likes',
            nonIcon: <Likes></Likes>,
            non: 'Likes on your videos',
            nonSub: "When someone likes one of your videos, you'll see it here",
         },
         {
            id: 3,
            content: 'Comments',
            nonIcon: <Comments></Comments>,
            non: 'Comments on your videos',
            nonSub: "When someone comments on one of your videos, you'll see it here",
         },
         {
            id: 4,
            content: 'Mentions and Tags',
            nonIcon: <MentionsAndTags></MentionsAndTags>,
            non: 'Mentions of You',
            nonSub: "When someone mentions you, you'll see it here",
         },
         {
            id: 5,
            content: 'Followers',
            nonIcon: <Followers></Followers>,
            non: 'New followers',
            nonSub: "When someone new follows you, you'll see it here",
         },
      ],
      data: {
         likes: {
            data: [
               {
                  key: 1,
                  nickname: 'Ngọc Hoàng',
                  avatar: 'Ngọc Hoàng',
                  full_name: 'Trần Minh Quang',
                  last_name: 'Quang Đẹp Trai',
                  tick: true,
                  followed: false,
                  startTime: '1-2-2020',
                  responseMessage: 'Hello',
                  userComment: 'TMQuang',
                  LikeComment: 'Yes I Do',
               },
               {
                  key: 2,
                  nickname: 'ProPlayer',
                  avatar: 'Ngọc Hoàng',
                  full_name: 'Trần Minh Quang',
                  last_name: 'Quang',
                  tick: true,
                  followed: true,
                  startTime: '1-2-2020',
                  userComment: 'TMQuang',
                  responseMessage: 'Hello',
                  LikeComment: 'Yes I Do',
               },
            ],
         },
         comments: {
            data: [
               {
                  key: 1,
                  nickname: 'Ngọc Hoàng',
                  avatar: 'Ngọc Hoàng',
                  full_name: 'Trần Minh Quang',
                  last_name: 'Hải Tặc Vương',
                  tick: true,
                  followed: false,
                  startTime: '1-2-2020',
                  responseMessage: 'Hello',
                  userComment: 'Hi',
                  LikeComment: 'Yes I Do',
               },
            ],
         },
         mentionAndTags: {
            data: [
               {
                  key: 1,
                  nickname: 'Ngọc Hoàng',
                  avatar: 'Ngọc Hoàng',
                  full_name: 'Địt mẹ mày',
                  last_name: 'Quang',
                  tick: true,
                  followed: true,
                  startTime: '9-9-2022',
                  userComment: 'Hi',
                  responseMessage: 'Hello',
                  LikeComment: 'Yes I Do',
               },
            ],
         },
         follower: {
            data: [
               {
                  key: 1,
                  nickname: 'Ngọc Hoàng',
                  avatar: 'Ngọc Hoàng',
                  full_name: '5 anh em siêu nhân',
                  last_name: 'Quang',
                  tick: true,
                  followed: true,
                  startTime: '9-9-2022',
                  responseMessage: 'Hello',
                  LikeComment: 'Yes I Do',
               },
            ],
         },
      },
   };

   return (
      <span className={styles.fixBugTippy}>
         <Tippy
            interactive
            hideOnClick="true"
            trigger="click"
            placement="bottom-end"
            offset={[60, 10]}
            render={(attrs) => <MailBoxTippy data={fakeAPI}></MailBoxTippy>}
         >
            <MessageTippy content="Mail Box">
               <button className={styles.mailBox}>
                  <MailBoxIcon></MailBoxIcon>
                  <div className={styles.mailBox_message}>18</div>
               </button>
            </MessageTippy>
         </Tippy>
      </span>
   );
}

export default MailBox;
