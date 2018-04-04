import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/App.css';
import RedditFeed from './RedditFeed';

const App = (props) => (
  <MuiThemeProvider>
    <div className="App">
      <AppBar
        title={"Reactjs Reddit"}
        showMenuIconButton={false}
      />
      <RedditFeed
        subreddit='reactjs'
      />
    </div>
  </MuiThemeProvider >
);

export default App;
