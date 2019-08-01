import React, {Component} from 'react';
import style from './landingPageContainerStyle.css'
import LandingPageText from '../landingPage/mainText/text'
import Icons from './icons/icons'

/**
 * App
 */
function LandingPageContainer() {
    /**
     * Render the application
     * @return {*}
     */
    return (
        <div className='landingPage'>
            <LandingPageText class='frankNardone' text={'FRANK NARDONE'}/>
            <div className='devdesDiv'>
                <LandingPageText class={'dev'} text={'DEVELOPER'}/>
                <LandingPageText class={'and'} text={'&'}/>
                <LandingPageText class={'des'} text={'DESIGNER'}/>
            </div>
            <Icons/>
        </div>
    )
}

export default LandingPageContainer;
