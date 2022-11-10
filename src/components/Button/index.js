import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({
   className,
   primary,
   leftIcon,
   rightIcon,
   follow,
   text,
   small,
   large,
   to,
   herf,
   children,
   onClick,
   disabled,
   textColorChanging,
   ...passProps
}) {
   let Comp = 'button';
   const classes = `
   ${styles.wrapper} ${primary ? styles.primary : ''} ${disabled ? styles.disabled : ''} ${text ? styles.text : ''} ${
      follow ? styles.follow : ''
   } ${small ? styles.small : ''} ${large ? styles.large : ''} ${className ? ([styles.className] = className) : ''} ${
      textColorChanging && styles.textColorChanging
   }
   `;

   const props = {
      onClick,
      ...passProps,
   };
   if (disabled) {
      delete props.onClick;
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else {
      if (herf) {
         props.herf = herf;
         Comp = Link;
      }
   }

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
         <span className={styles.title}>{children}</span>
         {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </Comp>
   );
}

Button.prototype = {
   className: PropTypes.string,
   primary: PropTypes.bool,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   follow: PropTypes.bool,
   text: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   to: PropTypes.string,
   herf: PropTypes.string,
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
};

export default Button;
