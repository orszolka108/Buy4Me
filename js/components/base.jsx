import React from 'react';
import {NavBar} from './navbar.jsx'
import {MainPage} from './main_page.jsx'
import firebase from 'firebase';

import config from '../firebase_api.js';

firebase.initializeApp(config);

class Base extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: 0,
            lat: 0,
            userId: props.userId,
            markers: []
        }
    }

    componentWillReceiveProps(props){
        this.setState(props)
    }

    componentDidMount(){
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        // Tu pobierasz pozycje
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude,

            });
        }, error => {
            console.log(error)
        });

        var ref = firebase.database().ref('shoppingList')
        ref.on('value', (data) => {
            var items = data.val()
            var keys = Object.keys(items)
            console.log("keys: " + keys)
            console.log(keys.length)
            var markers = []
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i]
                markers.push({
                    id: key,
                    lat: items[key].lat - (Math.random() * 0.1),
                    lng: items[key].lng - (Math.random() * 0.1),
                    items: items[key].items,
                })
                console.log("aaaaaaaaaaaaa")
                console.log(markers)
            }
            this.setState({
                lat: this.state.lat,
                lng: this.state.lng,
                markers: markers,
                userId: this.state.userId
            })
        })
    }
    render() {
        return <div className="container">
                    <div className="window">
                        <NavBar />
                        <MainPage lat={this.state.lat}
                                  lng={this.state.lng}
                                  userId={this.state.userId}
                                  markers={this.state.markers}
                        />
                    </div>
                </div>
    }
}

export {Base}