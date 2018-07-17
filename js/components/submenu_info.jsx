import React from 'react';

class SubmenuInfo extends React.Component {
    render () {
        return <div className="page-nav-submenu submenu-info">
            <div className="submenu-img">
                <div className="submenu-photo"></div>
                <h1 className="submenu-name">Kate Smith</h1>
                <span className="submenu-score">5.0 <i className="fas fa-star"></i></span>
                <h3 className="submenu-mail">katesmith@mail.com</h3>

            </div>
            <div className="submenu-info">
                <table className="table submenu-table">
                    <tbody>
                    <tr>
                        <td>Password</td>
                        <td><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i
                            className="fas fa-circle"></i><i className="fas fa-circle"></i><i
                            className="fas fa-circle"></i><i className="fas fa-circle"></i></td>
                    </tr>
                    <tr>
                        <td>Home Address</td>
                        <td>Marszalkowska 1</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>555-4567-890</td>
                    </tr>
                    </tbody>
                </table>
                <button className="submenu-save button">save</button>
                <button className="submenu-edit button">edit</button>
            </div>
        </div>
    }
}

export {SubmenuInfo}