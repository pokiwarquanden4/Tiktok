import App from 'App';
import ComingSoon from 'components/ComingSoon/ComingSoon';
import { EditProfile } from 'components/EditProfile';
import { LoginSignUpForm } from 'components/LoginSignUpForm';

function AppCover() {
   return (
      <div>
         <EditProfile></EditProfile>
         <LoginSignUpForm></LoginSignUpForm>
         <ComingSoon></ComingSoon>
         <App></App>
      </div>
   );
}

export default AppCover;
