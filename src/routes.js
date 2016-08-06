import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Blog from './components/Blog/Blog.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    // 不写路经时，默认显示Home页
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
  </Route>
)
