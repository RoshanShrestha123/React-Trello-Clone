import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            {/* <Route path="/" exact component={Main} /> */}
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;
