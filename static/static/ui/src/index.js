import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AddRoute from './components/AddRoute';
import Login from './components/Login';
import API from './components/API';
import CSRFToken from './components/csrftoken';


ReactDOM.render( 
    <React.StrictMode >
        <App / >
    </React.StrictMode>,
    document.getElementById('root')
);