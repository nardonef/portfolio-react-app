import React, {Component} from 'react';
import style from './appStyle.css'

/**
 * App
 */
class App extends Component {
    /**
     * Create the application
     */
    constructor() {
        super();

        this.state = {
            data: null,
        };
    }

    /**
     * called when component is called
     */
    componentWillMount() {
        // this.getData();
    }

    /**
     * Render the application
     * @return {*}
     */
    render() {
        return (
           <div class={style.primaryButton}>Hello World!</div>
        );
    }
}

export default App;
