import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import { AppNavigator } from './config/route';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }

}

export default App;
