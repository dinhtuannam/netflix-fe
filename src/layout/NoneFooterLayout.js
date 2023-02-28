import NoneTransparentNavbar from './../components/Navbar/NoneTransparentNavbar.js';
import { Fragment } from 'react';

function NoneFooterLayout({ children }) {
    return (
        <Fragment>
            <NoneTransparentNavbar />
            {children}
        </Fragment>
    );
}

export default NoneFooterLayout;
