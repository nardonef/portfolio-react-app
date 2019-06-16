import React, {Component} from 'react';
import style from './landingPageContainerStyle.css'
import LandingPageText from '../landingPage/mainText/text'

/**
 * App
 */
class LandingPageContainer extends Component {

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
                <LandingPage class={style.name} text={'FRANK NARDONE'}/>
                <LandingPage class={style.dev} text={'DEVELOPER'}/>
                <LandingPage class={style.des} text={'DESIGNER'}/>
            </div>
        )
    }
}

export default LandingPageContainer;
