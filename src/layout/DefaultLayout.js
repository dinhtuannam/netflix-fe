import Navbar from './../components/Navbar/Navbar.js';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer.js';
import Spinner from '../components/Spinner/Spinner.js';

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
