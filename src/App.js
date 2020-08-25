import React from 'react';
import './App.css';
import NavigationBar from './components/shared/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router path="/">
        <NavigationBar />
      <Switch>
        <Route exact path={"/"} render={(routerProps) => (<Home routerProps={routerProps} />)}/>
        <Route exact path={"/about"} render={(routerProps) => (<About routerProps={routerProps} />)}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
