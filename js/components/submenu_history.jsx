import React from 'react';

class SubmenuHistory extends React.Component {
    render () {
        return (
        <div className="page-nav-submenu submenu-history">
            <h2 className="history-tittle">shopping history</h2>
            <h3 className="history-subtitle">In progress:</h3>
            <div className="history-element" id="history-el">
                <i className="history-icon fas fa-shopping-basket"></i>
                <span className="history-time">11.07.2018</span>
                <p className="history-text">Lorem ipsum dolor sit amet</p>
            </div>
            <h3 className="history-subtitle">To do:</h3>
            <div className="history-element" id="history-el">
                <i className="history-icon fas fa-shopping-basket"></i>
                <span className="history-time">11.07.2018</span>
                <p className="history-text">Lorem ipsum dolor sit amet</p>
            </div>
            <h3 className="history-subtitle">Done:</h3>
            <div className="history-element" id="history-el">
                <i className="history-icon fas fa-shopping-basket"></i>
                <span className="history-time">11.07.2018</span>
                <p className="history-text">Lorem ipsum dolor sit amet</p>
                <a href="." className="history-link"><i className="history-rating fas fa-star"></i></a>
            </div>
        </div>
        )
    }
}

export {SubmenuHistory}