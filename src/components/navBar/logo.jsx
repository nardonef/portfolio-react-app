import React, {Component} from 'react';
import style from './logoStyle.css'

/**
 * NavBar
 */
class Logo extends Component {

    constructor(){
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    /**
     * Render the application
     * @return {*}
     */
    render() {
        const hoverClass = this.state.isHovered ? style.logo : '';
        return (
            <a className={'logo'} href="#">
                <span className='logoFirstName'>Frank</span>
                <span className='logoLastName'>Nardone</span>
            </a>
        )
    }
}

export default Logo;
