import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './index.css';



class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h1>Travel to the World of Mysteries</h1>
                    <br></br>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/jobs">Jobs</NavLink></li>
                    </ul>
                    {/* <h3 style={style}><NavLink to='/'>Home</NavLink></h3> */}
                </nav>
                {this.props.children};
            </div>
        )
    }
}


export default Header
