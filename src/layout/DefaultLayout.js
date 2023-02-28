import Navbar from './../components/Navbar/Navbar.js';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer.js';
function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;
