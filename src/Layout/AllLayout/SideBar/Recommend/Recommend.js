import PropTypes from 'prop-types';
import { ListUser } from 'src/components/User/ListUser';

function Recommend({ data, smallSize, noHoverAction }) {
   return smallSize ? (
      <ListUser data={data.data} type={data.type} noHoverAction={noHoverAction} listForLive></ListUser>
   ) : (
      <ListUser data={data.data} type={data.type} noHoverAction={noHoverAction}></ListUser>
   );
}

Recommend.propTypes = {
   data: PropTypes.object,
};

export default Recommend;
