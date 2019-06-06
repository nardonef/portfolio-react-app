import React, {Component} from 'react';
import style from './appStyle.css'
import LandingPage from '../landingPage/mainText/text'
import NavBar from '../navBar/navBar'
/**
 * App
 */
class App extends Component {

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
            <div className={style.mainDiv}>
                <NavBar/>
                <LandingPage class={style.name} text={'FRANK NARDONE'}/>
                <LandingPage class={style.dev} text={'DEVELOPER'}/>
                <LandingPage class={style.des} text={'DESIGNER'}/>
            </div>
        )
    }
}

export default App;
