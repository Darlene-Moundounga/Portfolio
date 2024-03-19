import React from 'react'
import Header from '../Components/Header/Header'
import Form from '../Components/Form/Form'

function Layout ( {children} ) {
    return (
    <React.Fragment>
            <Header/>
            {children}
    </React.Fragment>
    )
}

export default Layout