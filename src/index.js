import React from 'react';
import ReactDOM from 'react-dom'  ;
import AdminNav from './components/adminPages/adminNav';
import App from './contactUs';
// import ContactUs from './contactUs.js';
import './Style.css'
// import {BrowserRouter as Router} from 'react-router-dom'



// <React.StrictMode>
//     <Router>
//         <ContactUs/>
//     </Router>
// </React.StrictMode>



ReactDOM.render(
    <AdminNav/>
,document.getElementById('root'));



