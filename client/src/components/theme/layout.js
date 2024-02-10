import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout(props) {
    return (
        <>
            <Header />
            <div className='container'>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;