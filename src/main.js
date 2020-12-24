import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './pages/root/root.js';
import Blog from './pages/blog/blog'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Root}></Route>
      <Route exact path='/blog' component={Blog}></Route>
    </Switch>
  );
}

export default Main;