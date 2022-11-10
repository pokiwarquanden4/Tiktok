import styles from './Caption.module.scss';
import { Fragment, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import Image from 'src/components/images';
import { Wrapper } from 'src/components/Poper';

function Caption({ captionValue, setCaptionValue }) {
   const [captionList, setCaptionList] = useState(false);
   const captionRef = useRef();

   return (
      <div className={styles.caption}>
         <div className={styles.caption_header}>
            <div className={styles.caption_title}>Caption</div>
            <div className={styles.caption_word}>{captionValue.length} / 150</div>
         </div>
         <div className={styles.caption_body}>
            {!captionList || (
               <Fragment>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}></FontAwesomeIcon>
               </Fragment>
            )}
            <input
               value={captionValue}
               className={styles.caption_Input}
               ref={captionRef}
               onChange={(e) => {
                  if (captionValue.length < 150) {
                     setCaptionValue(e.target.value);
                  }
               }}
            ></input>
            {!captionList ? (
               <Fragment>
                  <img
                     src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg"
                     className={styles.caption_tags}
                     onClick={() => {
                        setCaptionList(true);
                     }}
                  ></img>
                  <img
                     src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg"
                     className={styles.caption_mention}
                  ></img>
               </Fragment>
            ) : (
               <FontAwesomeIcon
                  icon={faX}
                  className={styles.cancleIcon}
                  onClick={() => {
                     setCaptionList(false);
                  }}
               ></FontAwesomeIcon>
            )}

            {captionList && (
               <Wrapper className={styles.caption_list}>
                  <div className={styles.caption_list_header}>Following</div>
                  <div className={styles.caption_items}>
                     <div
                        className={styles.caption_item}
                        onClick={() => {
                           setCaptionValue(captionRef.current.value + '@WinerBase');
                           setCaptionList(false);
                        }}
                     >
                        <Image className={styles.caption_avatar} src="/" alt="fullname"></Image>
                        <div className={styles.caption_nameInfo}>
                           <div className={styles.caption_mainName}>Trần Minh Quang</div>
                           <div className={styles.caption_subName}>WinnerBase</div>
                        </div>
                     </div>
                     <div
                        className={styles.caption_item}
                        onClick={() => {
                           setCaptionValue(captionRef.current.value + '@WinerBase');
                           setCaptionList(false);
                        }}
                     >
                        <Image className={styles.caption_avatar} src="/" alt="fullname"></Image>
                        <div className={styles.caption_nameInfo}>
                           <div className={styles.caption_mainName}>TrầnDD</div>
                           <div className={styles.caption_subName}>WinnerBase</div>
                        </div>
                     </div>
                     <div
                        className={styles.caption_item}
                        onClick={() => {
                           setCaptionValue(captionRef.current.value + '@WinerBase');
                           setCaptionList(false);
                        }}
                     >
                        <Image className={styles.caption_avatar} src="/" alt="fullname"></Image>
                        <div className={styles.caption_nameInfo}>
                           <div className={styles.caption_mainName}>Trần Minh Quang</div>
                           <div className={styles.caption_subName}>WinnerBase</div>
                        </div>
                     </div>
                     <div
                        className={styles.caption_item}
                        onClick={() => {
                           setCaptionValue(captionRef.current.value + '@WinerBase');
                           setCaptionList(false);
                        }}
                     >
                        <Image className={styles.caption_avatar} src="/" alt="fullname"></Image>
                        <div className={styles.caption_nameInfo}>
                           <div className={styles.caption_mainName}>Trần Minh Quang</div>
                           <div className={styles.caption_subName}>WinnerBase</div>
                        </div>
                     </div>
                  </div>
               </Wrapper>
            )}
         </div>
      </div>
   );
}

export default Caption;
