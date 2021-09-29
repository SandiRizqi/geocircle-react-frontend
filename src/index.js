import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';
import Article from './Article';
import Order from './Order';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Index() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>

        <Route path="/article">
          <Article />
        </Route>

        <Route exact path="/order">
          <Order />
        </Route>
      </Switch>
    </div>
  );
}


ReactDOM.render(
  <Router>
    <Index/>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
