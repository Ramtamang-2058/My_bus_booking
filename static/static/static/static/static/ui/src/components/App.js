// // import React, { Component } from "react";
// // import { render } from "react-dom";
// // import Cookie from 'react-cookie';
// // import CSRFToken from "./csrftoken";
// // import { AddRoute } from "./AddRoute";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // export default class App extends Component {
// // constructor(props) {
// // super(props);
// // }

// // render() {
// // return (
// // <section className="login">
// //     <div>
// //         <AddRoute />

// //     </div>
// // </section>
// // )
// // }
// // }

// // const routeDiv = document.getElementById("route");
// // render(<App /> , routeDiv);
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// }
// from 'react-router-dom';
// import AddRoute  from './AddRoute';
// import Login from './Login';

// function App() {
//     return ( 
//         <Router >
        
//         < Routes >
//         <Route exact path = '/' exact element = {
//             <AddRoute / >
//         }/> 
//         <Route path = '/login' element = {
//             <Login / >
//         }
//         /> 
//         </Routes> 
//         </Router>
//     );
// }

// export default App;