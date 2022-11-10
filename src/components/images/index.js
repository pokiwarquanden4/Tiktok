import { useState } from 'react';
import image from 'src/Asset/Images';
import styles from './Images.module.scss';
import PropTypes from 'prop-types';

function Image({ src, alt, className, fallBack: customFallBack, ...props }) {
   const classes = `${styles.image} ${className ? (styles.className = className) : ''}`;
   const [fallBack, setFallBack] = useState('');
   const handleError = () => {
      setFallBack(customFallBack || image.noImage);
   };

   return <img className={classes} src={fallBack || src} alt={alt} {...props} onError={handleError}></img>;
}

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
   fallBack: PropTypes.string,
};

export default Image;
