import { Fragment } from 'react';
// =========== IMPORT COMPONENT ================
import HomePage from '../page/UserPage/HomePage.js';
import Movie from '../page/UserPage/Movie.js';
import LoginPage from '../page/UserPage/LoginPage.js';
import RegisterPage from '../page/UserPage/RegisterPage.js';
import DetailMovie from '../page/UserPage/DetailMovie.js';
// ===========  IMPORT LAYOUT   ================
import DefaultLayout from '../layout/DefaultLayout';
import NotFound from '../components/NotFound/NotFound.js';
import WatchPage from '../page/UserPage/WatchPage.js';
// ===========      ROUTES      ================
export const PublicRoutes = [
    { path: '/', component: HomePage, layout: DefaultLayout },
    { path: '/movie', component: Movie, layout: DefaultLayout },
    { path: '/movie/id=:id', component: DetailMovie, layout: DefaultLayout },
    { path: '/login', component: LoginPage, layout: Fragment },
    { path: '/register', component: RegisterPage, layout: Fragment },
    { path: '/watch/id=:id', component: WatchPage, layout: DefaultLayout },
    { path: '/notfound', component: NotFound, layout: DefaultLayout },
    // { path: '/admin', component: AdminPage, layout: AdminLayout },
    // { path: '/setting', component: SettingPage, layout: DefaultLayout },
];
