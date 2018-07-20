import React from 'react';
import {SubmenuInfo} from './submenu_info.jsx'
import {SubmenuMessage} from './submenu_message.jsx'
import {SubmenuHistory} from './submenu_history.jsx'
import {SubmenuSettings} from './submenu_settings.jsx'

class Submenu extends React.Component {

    render() {
        if (this.props.showSubmenuInfo) {
            return <SubmenuInfo />
        } else if (this.props.showSubmenuMessage){
            return <SubmenuMessage />
        } else if (this.props.showSubmenuHistory){
            return <SubmenuHistory />
        } else if (this.props.showSubmenuSettings) {
            return <SubmenuSettings/>
        } else {
            return <div></div>
        }
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubmenuInfo: false,
            showSubmenuMessage: false,
            showSubmenuHistory: false,
            showSubmenuSettings: false
        }
    }
    handleClickInfo = (e) => {
        e.preventDefault();
        this.setState ({
            showSubmenuInfo: !this.state.showSubmenuInfo,
            showSubmenuMessage: false,
            showSubmenuHistory: false,
            showSubmenuSettings: false
        })
    }

    handleClickMessage = (e) => {
        e.preventDefault();
        this.setState ({
            showSubmenuMessage: !this.state.showSubmenuMessage,
            showSubmenuInfo: false,
            showSubmenuHistory: false,
            showSubmenuSettings: false
        })
    }

    handleClickHistory = (e) => {
        e.preventDefault();
        this.setState ({
            showSubmenuHistory: !this.state.showSubmenuHistory,
            showSubmenuMessage: false,
            showSubmenuInfo: false,
            showSubmenuSettings: false
        })
    }

    handleClickSettings = (e) => {
        e.preventDefault();
        this.setState ({
            showSubmenuSettings: !this.state.showSubmenuSettings,
            showSubmenuMessage: false,
            showSubmenuHistory: false,
            showSubmenuInfo: false

        })
    }
    render() {
        return <div className='page-nav'>
                    <ul className="page-nav-list">
                        <li className="page-nav-el" >
                            <a href="."
                               className="page-nav-link"
                               onClick={this.handleClickInfo}
                            >
                                <i className="fas fa-user-alt"></i>
                            </a>
                        </li>
                        <Submenu showSubmenuInfo = {this.state.showSubmenuInfo}/>
                        <li className="page-nav-el">
                            <a href="."
                               className="page-nav-link"
                               onClick={this.handleClickMessage}
                            >
                                <i className="far fa-comments"></i>
                            </a>
                        </li>
                        <Submenu showSubmenuMessage = {this.state.showSubmenuMessage}/>
                        <li className="page-nav-el">
                            <a href="."
                               className="page-nav-link"
                               onClick={this.handleClickHistory}
                            >
                                <i className="fas fa-shopping-basket"></i>
                            </a>
                        </li>
                        <Submenu showSubmenuHistory = {this.state.showSubmenuHistory}/>
                        <li className="page-nav-el">
                            <a href="."
                               className="page-nav-link"
                               onClick={this.handleClickSettings}
                            >
                                <i className="fas fa-cogs"></i>
                            </a>
                        </li>
                        <Submenu showSubmenuSettings = {this.state.showSubmenuSettings}/>
                    </ul>
                </div>
    }
}

export {NavBar}