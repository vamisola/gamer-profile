import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return(
            <div>
                <header>
                    <h2><a>Gamer's Corner </a></h2>
                    <nav>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contactUs">Contact Us</a></li>
                    </nav>
                </header>
            </div>
            
        );
    }
}

export default Navbar;