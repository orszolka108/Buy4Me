import React from 'react';


class SubmenuMessage extends React.Component {


    render () {
        return <div className="page-nav-submenu submenu-messages">
            <h1 className="messages-tittle">your messages</h1>
            <div className="messages-element message-unread">
                <i className="messages-icon fas fa-envelope"></i>
                <span className="messages-time">11.07.2018</span>
                <p className="messages-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                    ratione.</p>
                <i className="messages-delete fas fa-trash"></i>
            </div>
            <div className="messages-element">
                <i className="messages-icon fas fa-envelope-open"></i>
                <span className="messages-time">22.06.2018</span>
                <p className="messages-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                    ratione.</p>
                <i className="messages-delete fas fa-trash"></i>
            </div>
            <div className="messages-element">
                <i className="messages-icon fas fa-envelope-open"></i>
                <span className="messages-time">04.05.2018</span>
                <p className="messages-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                    ratione.</p>
                <i className="messages-delete fas fa-trash"></i>
            </div>
        </div>
    }
}

export {SubmenuMessage}