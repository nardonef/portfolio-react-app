import React, {Component} from 'react';
import style from './icons.css'
import Icon from 'react-simple-icons'

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
                <Icon className={style.item} name={'facebook'} href={'www.google.com'}/>
                <Icon className={style.item} name={'twitter'}/>
                <Icon className={style.item} name={'github'}/>
                <Icon className={style.item} name={'linkedin'}/>
            </div>
        )
    }
}

export default LandingPageContainer;
