import React from 'react';
import {AddList} from './add_list.jsx';

import userList from './addlist';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

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
            markers: markers
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


    render() {
        const usersList = userList.map((item) => {
            console.log( `to ten + ${item.listLng}`);
            return 1
        })
        return <div className="page-main">
            <div className="page-map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "696px",
                        width: "1100px"
                    }}
                    zoom={[12]}
                    center={[this.state.lng, this.state.lat]}
                >
                    <Layer
                        type="symbol"
                        id="marker1"
                        layout={{"icon-image": "marker-15", "icon-size": 5}}
                    >
                        <Feature coordinates={[this.state.lng, this.state.lat]}/>
                    </Layer>
                    <Layer
                        type="symbol"
                        id="marker2"
                        layout={{"icon-image": "marker-15", "icon-size": 5}}>
                        {this.state.markers.map((marker) => (

                            <Feature coordinates={[marker.lng, marker.lat]}/>))
                        }



                    </Layer>
                    /*AZ DOTĄD*/

                </Map>
                <button className="add-button add-list-button button" onClick={this.handleClick} ><i className="fas fa-shopping-cart"></i> add list
                </button>
                <AddList
                    showAddList={this.state.showAddList}
                    lat={this.state.lat}
                    lng={this.state.lng}
                    userId={this.state.userId}
                />
            </div>
        </div>
    }
}

export {MainPage}
