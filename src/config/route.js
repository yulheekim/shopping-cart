import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {
    Items
} from '../pages';


const AppNavigator = () => (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Items} />
        </Switch>
    </BrowserRouter>
    </div>
)

export { AppNavigator};
