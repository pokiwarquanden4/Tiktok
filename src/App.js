import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
import { DefaultLayout, HeaderOnly } from './Layout';
import { Fragment, useEffect, useState } from 'react';
import { FullScreenLayout } from './Layout/FullScreenLayout';
import { useDispatch, useSelector } from 'react-redux';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { setActiveAccount } from 'api';
import { activeUserSelector } from 'redux/selectors/users';

function App() {
   const dispatch = useDispatch();
   let [finish, setFinish] = useState(false);
   const user = useSelector(activeUserSelector);

   useEffect(() => {
      const nickName = localStorage.getItem('nickName');
      if (nickName) {
         dispatch(
            activeUser.activeUserRequest({
               nickName: nickName,
               localStorage: true,
               active: true,
            }),
         );

         setActiveAccount({
            nickName: nickName,
            localStorage: true,
            active: true,
         });
      } else {
         setFinish(true);
      }
   }, []);

   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         setFinish(true);
      }
   }, [user]);

   const handleLocalStorage = () => {};
   return (
      finish && (
         <Router>
            <div className="App">
               <Routes>
                  {publicRoutes.map((route, index) => {
                     const Page = route.component;
                     let Layout = HeaderOnly;

                     switch (route.layout) {
                        case null:
                           Layout = Fragment;
                           break;
                        case HeaderOnly:
                           Layout = route.layout;
                           break;
                        case FullScreenLayout:
                           Layout = route.layout;
                           break;
                        default:
                           Layout = DefaultLayout;
                           break;
                     }

                     return (
                        <Route
                           key={index}
                           path={route.path}
                           element={
                              <div onLoad={handleLocalStorage}>
                                 <Layout>
                                    <Page></Page>
                                 </Layout>
                              </div>
                           }
                        ></Route>
                     );
                  })}
               </Routes>
            </div>
         </Router>
      )
   );
}

export default App;
