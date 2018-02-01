import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import LoginScreenContainer from './containers/LoginScreenContainer';
import ListPage from './containers/ListPage';
import withAuth from './hocs/withAuth';
import rootReducer from './ducks';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const Home = withAuth(() => (
  <Redirect to="/list" />
));

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={ListPage} />
            <Route path="/login" component={LoginScreenContainer} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
