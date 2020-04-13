import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


const App = () => (
    <div className="app-container">
        <Switch>
            <h1>Testando lefeeeu</h1>
            {/* <Route exact={true} path="/" component={<h1>Testando Root Route</h1>} /> */}
        </Switch>
    </div>
);

export default withRouter(App);
