import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';

import Home from './components/Home.js';
import NewCard from './components/NewCard.js';
import About from './components/About.js'
import NotFound from './components/NotFound.js';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="newcard" component={NewCard}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component={NotFound} />
    </Router>,
  document.getElementById('root')
);
