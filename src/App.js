import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import PostDetails from './component/PostDetails/PostDetails';
import CommentDetails from './component/CommentDetails/CommentDetails';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route path="/comment/:commentId">
          <CommentDetails></CommentDetails>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
