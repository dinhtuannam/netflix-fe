// import layout
import DefaultLayout from '../layout/DefaultLayout';
// import components 
import SettingPage from '../page/UserPage/SettingPage.js';
import PlaylistPage from '../page/UserPage/PlaylistPage/PlaylistPage';
import NoneFooterLayout from '../layout/NoneFooterLayout';
// Routes
export const PrivateRoutes = [   
    { path: '/setting/*', component: SettingPage, layout: NoneFooterLayout },
    { path: '/playlist', component: PlaylistPage, layout: NoneFooterLayout },
];