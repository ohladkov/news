import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import SinglePost from './SinglePost';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/:postId' component={SinglePost} />
    </Router>
  </Provider>
);

export default Root;
