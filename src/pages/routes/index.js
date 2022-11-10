import { Following } from '../Following';
import { Home } from '../Home';
import { Upload } from '../Upload';
import { Profile } from '../Profile';
import Live from '../Live';
import { HeaderOnly } from 'src/Layout';
import config from 'src/config';
import { Message } from '../Message';
import { FullScreenLayout } from 'src/Layout/FullScreenLayout';
import { UserLive } from 'pages/UserLive';
import { UserVideo } from 'pages/UserVideo';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.Following, component: Following },
   { path: config.routes.NickName, component: Profile, layout: FullScreenLayout },
   { path: config.routes.UserLive, component: UserLive, layout: FullScreenLayout },
   { path: config.routes.UpLoad, component: Upload, layout: FullScreenLayout },
   { path: config.routes.Live, component: Live, layout: FullScreenLayout },
   { path: config.routes.Message, component: Message, layout: HeaderOnly },
   { path: config.routes.UserVideo, component: UserVideo, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
