import React from 'react';
import {NavBar} from './navbar.jsx'
import {MainPage} from './main_page.jsx'


class Base extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: 0,
            lat: 0
        }
    }

    componentDidMount(){
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        // Tu pobierasz pozycje
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            });
        }, error => {
            console.log(error)
        });
        // Tutaj pobierz dane o dostepnych zakupach
        // Np z tablicy, pliku czy bazy (firebase)
    }
    render() {

        return <div className="container">
                    <div className="window">
                        <NavBar />
                        {/*Tu przekaz pobrana liste zakupow*/}
                        <MainPage lat={this.state.lat} lng={this.state.lng}/>
                    </div>
                </div>
    }
}

export {Base}