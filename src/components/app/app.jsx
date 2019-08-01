import React, {Component} from 'react';
import NavBar from '../navBar/navBar'
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router/router';
import style from './appStyle.css';

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
            <div className='application'>
                <BrowserRouter>
                    <NavBar/>
                    <Router/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
