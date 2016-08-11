import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Blog from './components/Blog/Blog.js';
import Skill from './components/Skill/skill.js';
import Post from './components/Blog/Post.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="skill" component={Skill} />
    <Route path="about" component={About} />
    <Route path="blog/:title" component={Post} />
  </Route>
)
// blog/:title中title可以任意取
