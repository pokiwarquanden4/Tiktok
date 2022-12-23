import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { userAvatar } from 'api';
import { AccountPreview } from 'src/Layout/AllLayout/SideBar/Recommend/AccountPreview';
import { useDispatch, useSelector } from 'react-redux';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';
import { activeUserSelector } from 'redux/selectors/usersSelector';

function AccountItem({ data, className, classNameImage, tippy, listForLive }) {
   const dispatch = useDispatch();
   const currentUser = useSelector(activeUserSelector);
   const classes = `${Styles.wrapper} ${className ? ([Styles.className] = className) : ''}`;
   const classesImage = `${classNameImage ? ([Styles.classNameImage] = classNameImage) : ''}`;

   const getAvatar = (user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.nickName + '/' + user.avatar);
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
            <Link
               to={`/@${data.nickName}`}
               className={classes}
               onClick={(e) => {
                  if (currentUser && Object.keys(currentUser).length === 0) {
                     dispatch(inputZone.showLoginSignUp());
                     e.preventDefault();
                  }
               }}
            >
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
