import React, {Component} from 'react';
import style from './icons.css'
import Icon from 'react-simple-icons'

/**
 * App
 */
class LandingPageContainer extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Render the application
     * @return {*}
     */
    render() {

        return (
            <div className='icon'>
                <Icon className='iconItem' name={'facebook'} href={'www.google.com'}/>
                <Icon className='iconItem' name={'twitter'}/>
                <Icon className='iconItem' name={'github'}/>
                <Icon className='iconItem' name={'linkedin'}/>
            </div>
        )
    }
}

export default LandingPageContainer;
