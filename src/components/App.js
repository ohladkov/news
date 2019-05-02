import React from 'react';
import Blog from '../containers/Blog';
import AddPost from '../containers/AddPost';
import './App.scss';

const App = () => (
  <div className="App">
    <AddPost />
    <Blog />
  </div>
);

export default App;
