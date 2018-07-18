import React from 'react';
import ReactDOM from 'react-dom';
import {Base} from './components/base.jsx'

require ("../scss/main.scss");


import userId from './config.js';
import userInfo from './users.js';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Base userId = {userId}
               userName = {userInfo[0]}
        />,
        document.getElementById('app')
    );
});