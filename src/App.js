import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from './views/Index';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'assets/styles/tailwind.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Index} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default App;
