import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LandingPage from '../landingPage/landingPageContainer'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import style from './transitionStyles.css'


function Router({ location }) {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/first" component={() => <div>first</div>} />
            <Route path="/second" component={() => <div>second</div>} />
            <Route path="/third" component={() => <div>third</div>} />
        </Switch>
    );
}

export default withRouter(Router);
