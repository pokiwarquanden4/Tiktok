import styles from './Caption.module.scss';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import Image from 'src/components/images';
import { Wrapper } from 'src/components/Poper';
import wrapper from 'components/Poper/wrapper';

function Caption({ captionValue, setCaptionValue }) {
   const [captionList, setCaptionList] = useState(false);
   const [captionTextValue, setCaptionTextValue] = useState('');
   const [length, setLenght] = useState(0);
   const captionRef = useRef();
   const inputWrapperRef = useRef();

   useEffect(() => {
      captionRef.current.style.minWidth = (captionTextValue.length + 1) * 10 + 'px';
   }, [captionTextValue]);
   useEffect(() => {
      setLenght(getLength() + captionTextValue.length);
   }, [captionTextValue, captionValue]);

   const createTag = useCallback((value) => {
      const wrapper = inputWrapperRef.current;
      const lastChildValue = wrapper.lastChild.value;

      const text = document.createElement('div');
      text.className = `${styles.text}`;
      text.innerHTML = lastChildValue;

      const tag = document.createElement('span');
      tag.className = `${styles.tag}`;
      tag.innerHTML = value;

      if (lastChildValue) {
         wrapper.insertBefore(text, wrapper.children[captionValue.length]);
         wrapper.insertBefore(tag, wrapper.children[captionValue.length + 1]);

         setCaptionValue([...captionValue, lastChildValue, value]);
      } else {
         wrapper.insertBefore(tag, wrapper.children[captionValue.length]);

         setCaptionValue([...captionValue, value]);
      }
   });

   const getLength = useCallback(() => {
      let result = 0;
      captionValue.forEach((item) => {
         result += item.length;
      });
      return result;
   });

   return (
      <div className={styles.caption}>
         <div className={styles.caption_header}>
            <div className={styles.caption_title}>Caption</div>
            <div className={styles.caption_word}>{length} / 150</div>
         </div>
         <div className={styles.caption_body}>
            {!captionList || (
               <Fragment>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}></FontAwesomeIcon>
               </Fragment>
            )}
            <div
               className={styles.inputWrapper}
               onClick={() => {
                  captionRef.current.focus();
               }}
               ref={inputWrapperRef}
            >
               <input
                  value={captionTextValue}
                  className={styles.caption_Input}
                  ref={captionRef}
                  onChange={(e) => {
                     if (captionTextValue.length < 150) {
                        setCaptionTextValue(e.target.value);
                     }
                  }}
                  onKeyDown={(e) => {
                     if (e.key === 'Backspace' && captionTextValue.length === 0 && captionValue.length !== 0) {
                        const wrapper = inputWrapperRef.current;
                        const lastChild = wrapper.children[captionValue.length - 1];
                        if (lastChild.tagName === 'SPAN') {
                           wrapper.removeChild(lastChild);
                        }
                        if (lastChild.tagName === 'DIV') {
                           const innerText = lastChild.innerHTML;

                           wrapper.removeChild(lastChild);

                           setCaptionTextValue(innerText);
                        }

                        const arr = captionValue;
                        arr.pop();
                        setCaptionValue(arr);
                     }
                  }}
               ></input>
            </div>
            {!captionList ? (
               <Fragment>
                  <img
                     src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg"
                     alt="Error"
                     className={styles.caption_tags}
                     onClick={() => {
                        setCaptionList(true);
                     }}
                  ></img>
                  <img
                     src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg"
                     alt="Error"
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
                           createTag('@WinerBase');
                           setCaptionTextValue('');
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
