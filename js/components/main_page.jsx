import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";



const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoib3Jzem9sa2ExMDgiLCJhIjoiY2pqcHppMDZpMjFkajNrbzFsbGpvZmpveSJ9.I3mzOw5g7M2Dz0P6JmyXPg"
});



class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: props.lat,
            lng: props.lng,
            // zakupy to bedzie tablica obiektow, kazdy zakup bedzie mial informacje
            // jak koordynaty, zamowione produkty, etc itp.
            zakupy: []
        }
    }
    // Tu przyjda zakupy i twoja lokalizacja
    componentWillReceiveProps(noweProps) {
        this.setState(noweProps)
    }
    render() {
        return <div className="page-main">
            <div className="page-map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "696px",
                        width: "1100px"
                    }}
                    zoom={[16]}
                    center={[this.state.lng, this.state.lat]}
                >
                    /*Tutaj robisz petle po zakupach i wyswietlasz markery */
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{"icon-image": "marker-15", "icon-size": 3}}
                    >
                        <Feature coordinates={[this.state.lng, this.state.lat]}/>
                    </Layer>
                    /*AZ DOTĄD*/

                </Map>
                <button className="add-button page-main-button button"><i className="fas fa-shopping-cart"></i> add list</button>
            </div>
        </div>
    }
}

export {MainPage}