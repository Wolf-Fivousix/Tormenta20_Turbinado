import React from 'react';
import "../stylesheets/main_css"; 
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from "./main_page";


const App = () => (
    <div className="app-container">
        <Switch>
            <Route exact={false} path="/" component={MainPage} />
        </Switch>
    </div>
);

export default withRouter(App);
