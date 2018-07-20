import React from 'react';
import {AddList} from './add_list.jsx';
import {AddedList} from './added_list.jsx';

import userList from './addlist';

import ReactMapboxGl, { Popup, Marker, Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoib3Jzem9sa2ExMDgiLCJhIjoiY2pqcHppMDZpMjFkajNrbzFsbGpvZmpveSJ9.I3mzOw5g7M2Dz0P6JmyXPg"
});

class SubmenuInfoAdded extends React.Component {

    render () {
        console.log(this.props.showSubmenuInfo)
        if (this.props.showSubmenuInfo) {
            return <div className="submenu-info added-submenu">
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
        } else {
            return <div></div>
        }

    }
}


class MainPage extends React.Component {

    constructor(props) {
        super(props)
        var markers
        if (props.markers) {
            markers = props.markers
        } else {
            markers = []
        }

        this.state = {
            lat: props.lat,
            lng: props.lng,
            showAddList: false,
            userId: props.userId,
            markers: markers,
            showAddedList: false,
            date: this.props.date,
            time: this.props.time,
            showSubmenuInfo: false
        }
    }

    componentWillReceiveProps(noweProps) {
        this.setState(noweProps)
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState ({
            showAddList: !this.state.showAddList
        })
    }

    handleAnswer = (msgFromChild) => {
        this.setState({
            showAddList: msgFromChild
        })
    }

    handleListAdded = (marker) => {
        let show = this.state.showAddedList;
        let addedList = (
            <AddedList
                showAddedList = {!show}
                marker = {marker}
            />
        )

        this.setState ({
            showAddedList: !show,
            addedList: addedList
        })
    }

    handleAddInfo = (e) => {
        e.preventDefault();
        console.log(this.state.showSubmenuInfo)
        let show = this.state.showSubmenuInfo
        let addedInfo = (
            <SubmenuInfoAdded
                showSubmenuInfo={this.state.showSubmenuInfo}
            />
        )

        this.setState ({
            showSubmenuInfo: !show,
            addedInfo: addedInfo
        })
    }

    render() {
        return <div className="page-main">
            <div className="page-map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        minHeight: "755px",
                        width: "1100px"
                    }}
                    type="vector"
                    zoom={[12]}
                    center={[this.state.lng, this.state.lat]}>
                    <Marker coordinates={[this.state.lng, this.state.lat]}>
                        <div className="add-list-input">
                            <a className = "add-list-remove"
                                onClick={this.handleAddInfo}
                            >
                                <i className="fas fa-user"></i></a>
                                {/*// showAddedList={this.state.showAddedList}*/}
                        </div>
                    </Marker>
                    {this.state.addedInfo}
                        {this.state.markers.map((marker) => {
                           return <Marker coordinates={[marker.lng, marker.lat]}>
                                <div className="added-list">
                                    <a className = "added-list-link"
                                       onClick={(e) => this.handleListAdded(marker)}
                                    >
                                        <i className="fas fa-shopping-basket added-items"></i></a>
                                </div>
                            </Marker>})
                        }
                    {this.state.addedList}
                </Map>

                <button
                    className="add-button add-list-button button"
                    onClick={this.handleClick}
                >
                    <i className="fas fa-shopping-cart"></i>
                    add list
                </button>
                <AddList
                    showAddList={this.state.showAddList}
                    lat={this.state.lat}
                    lng={this.state.lng}
                    userId={this.state.userId}
                    giveMeAnswer={this.handleAnswer}
                />
            </div>
        </div>
    }
}

export {MainPage}
