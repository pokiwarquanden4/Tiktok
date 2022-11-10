import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '..';
import styles from './Menu.module.scss';
import ListMenuItem from './ListMenuItem';
import Header from './Header';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'tippy.js/animations/perspective.css';

function Menu({ children, items, onChange, openOnClick, openOnClick_Action, className }) {
   const [history, setHistory] = useState([{ data: items }]);

   const current = history[history.length - 1];
   const classes = `${styles.menuWrapper} ${className ? ([styles.className] = className) : ''}`;

   useEffect(() => {
      setHistory([{ data: items }]);
   }, [items]);

   let renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <ListMenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            ></ListMenuItem>
         );
      });
   };

   return (
      <Tippy
         interactive
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
         delay={[null, 500]}
         placement="bottom-end"
         //MessageZone
         hideOnClick={openOnClick ? true : false}
         zIndex={1}
         onClickOutside={openOnClick ? openOnClick_Action : null}
         trigger={openOnClick ? 'click' : 'mouseenter'}
         offset={openOnClick ? [0, -5] : [0, 10]}
         render={(attrs) => (
            <div className={styles.menu} tabIndex="-1">
               <Wrapper flexcolumn__left className={classes}>
                  {history.length > 1 && (
                     <Header
                        title={current.title}
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     ></Header>
                  )}
                  <div className={styles.menu_rollBar}>{renderItem()}</div>
               </Wrapper>
            </div>
         )}
         onMount={() => {}}
      >
         {children}
      </Tippy>
   );
}

Menu.propTypes = {
   children: PropTypes.node,
   items: PropTypes.array,
   onChange: PropTypes.func,
};

export default Menu;
