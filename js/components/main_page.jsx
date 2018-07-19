import React from 'react';
import {AddList} from './add_list.jsx';

import userList from './addlist';

import ReactMapboxGl, { Popup, Marker, Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoib3Jzem9sa2ExMDgiLCJhIjoiY2pqcHppMDZpMjFkajNrbzFsbGpvZmpveSJ9.I3mzOw5g7M2Dz0P6JmyXPg"
});


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
        console.log(this.state.showAddList)
    }

    handleAnswer = (msgFromChild) => {
        this.setState({
            showAddList: msgFromChild
        })
    }

    render() {
        return <div className="page-main">
            <div className="page-map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "760px",
                        width: "1100px"
                    }}
                    zoom={[12]}
                    center={[this.state.lng, this.state.lat]}>
                    <Layer
                        type="symbol"
                        id="marker1"
                        layout={{"icon-image": "star-15", "icon-size": 5}}
                        paint={{"icon-color": "red"}}
                    >
                        <Feature
                            coordinates={[this.state.lng, this.state.lat]}/>
                    </Layer>
                    <Layer
                        type="symbol"
                        id="marker2"
                        layout={{"icon-image": "shop-15", "icon-size": 5}}>
                        {this.state.markers.map((marker) => (

                            <Feature coordinates={[marker.lng, marker.lat]}/>))
                        }
                    </Layer>
                </Map>
                <button className="add-button add-list-button button" onClick={this.handleClick} ><i className="fas fa-shopping-cart"></i> add list
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
