import React, {Component} from 'react';

/**
 * App
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props);
    }

    /**
     * Render the application
     * @return {*}
     */
    render() {
        return (
            <div className={this.props.class}>
                <span className={this.props.class}>{this.props.text}</span>
            </div>
        )
    }
}

export default App;
