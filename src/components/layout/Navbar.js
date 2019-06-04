import React, { Component } from 'react';
import SignIn from '../auth/SignIn'; 

class Navbar extends Component {
    state = {  }
    render() { 
        return (  <nav className="navbar">
        <h1>Facebook</h1>
        <SignIn />

        </nav>);
    }
}
 
export default Navbar;