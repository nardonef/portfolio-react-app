import React, {Component} from 'react';
import style from './landingPageContainerStyle.css'
import LandingPageText from '../landingPage/mainText/text'
import Icons from './icons/icons'

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
                <LandingPageText class={style.name} text={'FRANK NARDONE'}/>
                <div className={style.devdesDiv}>
                    <LandingPageText class={style.dev} text={'DEVELOPER'}/>
                    <LandingPageText class={style.and} text={'&'}/>
                    <LandingPageText class={style.des} text={'DESIGNER'}/>
                </div>
                <Icons/>
            </div>
        )
    }
}

export default LandingPageContainer;
