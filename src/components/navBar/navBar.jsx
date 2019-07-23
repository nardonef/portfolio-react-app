import React, {Component} from 'react';
import style from './navBarStyle.css'
import Logo from './logo'

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
            <nav className={style.navbar} role="navigation">
                        <ul className={style.navList}>
                            <Logo/>
                            <li className={style.listItems}><a className={style.links}>Home</a></li>
                            <li className={style.listItems}><a className={style.links}>Portfolio</a></li>
                            <li className={style.listItems}><a className={style.links}>About Me</a></li>
                            <li className={style.listItems}><a className={style.links}>Contact</a></li>
                        </ul>
            </nav>
        )
    }
}

export default NavBar;
