import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { Wrapper } from 'src/components/Poper';
import 'tippy.js/dist/tippy.css';
import useDebound from 'src/components/Hook/useDebound';
import { AccountRecommend } from 'pages/AccountRecommend';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from 'components/AccountItem';
import { userSearchSelector } from 'redux/selectors/usersSelector';
import { fetchUsersByName } from 'api';

function SearchBar() {
   const dispatch = useDispatch();
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [focusResults, setFocusResults] = useState(true);
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();
   const userDebound = useDebound(searchValue, 500);

   useEffect(() => {
      const action = async () => {
         if (!userDebound.trim()) {
            setSearchResults([]);
            return;
         }
         setLoading(true);
         fetchUsersByName(searchValue).then((result) => {
            setSearchResults(result.data);
         });
      };
      action();
   }, [userDebound]);

   useEffect(() => {
      setLoading(false);
   }, [searchResults]);

   const handleHideResults = () => {
      setFocusResults(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ') || searchValue.trim()) {
         setSearchValue(searchValue);
      }
   };

   const handleSearch = (e) => {
      e.preventDefault();
   };

   return (
      //fix Bug Tippy ussing div
      <div>
         <Tippy
            interactive
            visible={searchResults.length > 0 && focusResults}
            onClickOutside={handleHideResults}
            render={(attrs) => (
               <div className={styles.search__results} tabIndex="-1">
                  <Wrapper flexcolumn="true">
                     {/* <div className={styles.search__Recommend}>
                        <AccountRecommend></AccountRecommend>
                     </div> */}
                     <h4 className={styles.search__account}>
                        <div className={styles.title}>Account</div>
                        {searchResults.map((results) => {
                           return <AccountItem tippy key={results._id} data={results}></AccountItem>;
                        })}
                     </h4>
                  </Wrapper>
               </div>
            )}
         >
            <div className={styles.findingBar}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  type="text"
                  placeholder="Tìm kiếm tài khoản và video"
                  onChange={(e) => {
                     handleChange(e);
                  }}
                  onFocus={(e) => {
                     setFocusResults(true);
                  }}
               ></input>

               {!!searchValue && !loading && (
                  <button
                     className={styles.findingBar__closeButton}
                     onClick={() => {
                        setSearchValue('');
                        setSearchResults([]);
                        inputRef.current.focus();
                     }}
                  >
                     <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                  </button>
               )}
               {loading && (
                  <button className={styles.findingBar__spinner}>
                     <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                  </button>
               )}
               <button className={styles.findingBar__searchButton} onMouseDown={handleSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
               </button>
            </div>
         </Tippy>
      </div>
   );
}

export default SearchBar;
