import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className="container-fluid header">
            <h1 className="text-center">Clam Jam</h1>
        </div> );
    }
}
 
export default Header;