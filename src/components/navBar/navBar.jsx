import React, {Component} from 'react';
import './navBarStyle.css'
import { Link } from "react-router-dom";

/**
 * NavBar
 */
class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Render the application
     * @return {*}
     */
    render() {
        return (
            <nav className='navbar' role="navigation">
                <ul className='navList'>
                    {/*<Logo/>*/}
                    <li className='navListItems'><Link to={'/'} className='navLinks'>Home</Link></li>
                    <li className='navListItems'><Link to={'/portfolio'} className='navLinks'>Portfolio</Link></li>
                    <li className='navListItems'><Link to={'/aboutme'} className='navLinks'>About Me</Link></li>
                    <li className='navListItems'><Link to={'/contact'} className='navLinks'>Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
