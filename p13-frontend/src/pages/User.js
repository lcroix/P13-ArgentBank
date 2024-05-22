import React from 'react';
import Nav from '../components/Nav.js';
import Transaction from '../components/Transaction.js';
import Footer from '../components/Footer.js';
import UserInfo from '../components/UserInfo.js';

const User = () => {
    
    return (
       <body>
        <Nav />
        <Transaction />
        <UserInfo />
        <Footer />   
       </body>
    );
}

export default User;