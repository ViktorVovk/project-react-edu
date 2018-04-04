import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Posts from './Posts';
import Albums from './Albums';
import Comments from './Comments';
import Users from './Users';
import Todos from './Todos';
import Photos from './Photos';
import PostSingle from './PostSingle';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
          <Route path="/photos" component={Photos} />
          <Route path="/albums" component={Albums} />
          <Route path="/todos" component={Todos} />
          <Route path="/comments" component={Comments} />
          <Route path="/posts/:id" component={PostSingle} />
      </div>
    );
  }
}

export default App;
