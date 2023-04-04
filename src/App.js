import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes  } from './routes/PublicRoutes';
import { PrivateRoutes } from './routes/PrivateRoutes'
import { ProtectRoutes } from './routes/ProtectRoutes';
import { ProtectAdminRoutes , AdminRoutes } from './routes/AdminRoutes';
import { SkeletonTheme } from "react-loading-skeleton"
import ScrollToTop from './helper/ScrollToTop';
function App() {
    return (
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        {PublicRoutes.map((value, index) => {
                            const Page = value.component;
                            const Layout = value.layout;
                            return (
                                <Route
                                    exact
                                    path={value.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                    key={value.path}
                                />
                            );
                        })}
                        {PrivateRoutes.map((value, index) => {
                            const Page = value.component;
                            const Layout = value.layout;
                            return (
                                <Route element={<ProtectRoutes />} key="protectRoutes">
                                    <Route
                                    exact
                                    path={value.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                    key={value.path}
                                />
                                </Route>
                            );
                        })}
                        {AdminRoutes.map((value, index) => {
                            const Page = value.component;
                            const Layout = value.layout;
                            return (
                                <Route element={<ProtectAdminRoutes />} key="protectAdminRoutes">
                                    <Route
                                    exact
                                    path={value.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                    key={value.path}
                                />
                                </Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </SkeletonTheme>
    );
}

export default App;
