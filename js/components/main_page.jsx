import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoib3Jzem9sa2ExMDgiLCJhIjoiY2pqcHppMDZpMjFkajNrbzFsbGpvZmpveSJ9.I3mzOw5g7M2Dz0P6JmyXPg"
});




class MainPage extends React.Component {

    
    render() {
        return (
            <div className="page-main">
                <div className="page-map">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%"
                        }}>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                            <Feature coordinates={[1, 1]}/>
                        </Layer>
                    </Map>
                    <button className="page-main-button button">
                        <i className="fas fa-shopping-cart"></i> add list
                    </button>
                </div>
            </div>
        )
    }
}

export {MainPage}