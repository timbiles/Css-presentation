import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Inline from './pages/inline';
import Modules from './pages/modules';
import Sass from './components/sass/sass'
import Styled from './pages/styled';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/styled" component={Styled} />
            <Route path="/sass" component={Sass} />
            <Route path="/modules" component={Modules} />            
            <Route path="/inline" component={Inline} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
