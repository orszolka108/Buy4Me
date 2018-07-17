import React from 'react';
import {NavBar} from './navbar.jsx'
import {MainPage} from './main_page.jsx'


class Base extends React.Component {
    render() {
        return <div className="container">
                    <div className="window">
                        <NavBar />
                        <MainPage />
                    </div>
                </div>
    }
}

export {Base}