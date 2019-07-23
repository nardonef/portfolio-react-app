import React, {Component} from 'react';
import style from './appStyle.css'
import LandingPage from '../landingPage/landingPageContainer'
import NavBar from '../navBar/navBar'
import 'font-awesome/css/font-awesome.css';

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
                <LandingPage/>
            </div>
        )
    }
}

export default App;
