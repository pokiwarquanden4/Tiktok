import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { userAvatar } from 'api';
import { AccountPreview } from 'src/Layout/AllLayout/SideBar/Recommend/AccountPreview';
function AccountItem({ data, className, classNameImage, tippy, listForLive }) {
   const classes = `${Styles.wrapper} ${className ? ([Styles.className] = className) : ''}`;
   const classesImage = `${classNameImage ? ([Styles.classNameImage] = classNameImage) : ''}`;

   const getAvatar = (user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.avatar);
   };

   return (
      <span>
         <Tippy
            disabled={tippy}
            offset={[-20, 0]}
            interactive="true"
            delay={[800, 0]}
            placement="bottom"
            render={(attrs) => <AccountPreview data={data}></AccountPreview>}
         >
            <Link to={`/@${data.nickName}`} className={classes}>
               <Image src={getAvatar(data)} className={classesImage} alt={data.full_name}></Image>
               <div className={Styles.info}>
                  <h4 className={Styles.main__Name}>
                     {data.last_name}
                     {data.tick && !listForLive && (
                        <FontAwesomeIcon className={Styles.checkIcon} icon={faCheckCircle}></FontAwesomeIcon>
                     )}
                  </h4>
                  <span className={Styles.sub__Name}>{data.full_name}</span>
               </div>
               {listForLive && <div className={Styles.currentWatcher}>100</div>}
            </Link>
         </Tippy>
      </span>
   );
}

//Check input data
AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
   className: PropTypes.string,
   classNameImage: PropTypes.string,
   tippy: PropTypes.bool,
};

export default AccountItem;
