import React, { Component } from 'react';
import Main from './components/Login_page/Main';
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register_page/Register';
import Todo_Page from './components/Todo_Page/Todo_Page';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register}/>
            <Route path="/todo-page/:id" component={Todo_Page}/>
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;
