import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
import { DefaultLayout, HeaderOnly } from './Layout';
import { Fragment } from 'react';
import { FullScreenLayout } from './Layout/FullScreenLayout';

function App() {
   return (
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
                           <Layout>
                              <Page></Page>
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
