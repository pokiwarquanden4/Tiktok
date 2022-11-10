import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useDebound(value, delay) {
   const [deboundValue, setDeboundValue] = useState(value);
   useEffect(() => {
      const handle = setTimeout(() => {
         setDeboundValue(value);
      }, delay);
      return () => {
         clearTimeout(handle);
      };
   }, [value]);

   return deboundValue;
}

useDebound.propTypes = {
   value: PropTypes.string,
   delay: PropTypes.number,
};

export default useDebound;
