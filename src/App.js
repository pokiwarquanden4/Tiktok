import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
import { DefaultLayout, HeaderOnly } from './Layout';
import { Fragment, useEffect, useState } from 'react';
import { FullScreenLayout } from './Layout/FullScreenLayout';
import { useDispatch, useSelector } from 'react-redux';
import { videoActions } from 'redux/actions/VideoActions/VideoActions';
import { videoSelector } from 'redux/selectors/videoSelector';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { messageSelector } from 'redux/selectors/messageSelector';
import { messageAction } from 'redux/actions/messageActions/messageActions';
import socketMessage from 'socket/socketActions/socketMessage';

function App() {
   const dispatch = useDispatch();
   const [readyVideos, setReadyVideos] = useState(false);
   const user = useSelector(activeUserSelector);
   const videos = useSelector(videoSelector);

   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         dispatch(videoActions.getVideoRequest([...user.following, user.nickName]));
      } else {
         setReadyVideos(true);
      }
   }, []);

   useEffect(() => {
      dispatch(messageAction.getMessageRequest());
      socketMessage(dispatch);
   }, []);

   useEffect(() => {
      if (videos.length >= 0) {
         setReadyVideos(true);
      }
   }, [videos]);

   const handleLocalStorage = () => {};
   return (
      readyVideos && (
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
