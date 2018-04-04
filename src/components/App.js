import React from 'react';
import AppBar from 'material-ui/AppBar';
import '../styles/App.css';
import RedditFeed from './RedditFeed';

const App = (props) => (
  <div className="App">
    <AppBar
      title={"Reactjs Reddit"}
      showMenuIconButton={false}
    />
    <RedditFeed
      subreddit='reactjs'
    />
  </div>
);

export default App;
