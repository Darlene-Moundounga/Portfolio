import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function Layout ( {children} ) {
    return (
    <React.Fragment>
            <Header/>
            {children}
            <Footer/>
    </React.Fragment>
    )
}

export default Layout