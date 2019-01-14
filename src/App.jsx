import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/customers' component={CustomersContainer}/>
          </div>
        </Router>
      );
  }
}
