import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/App.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RedditPost from './RedditPost';
import RedditFeed from './RedditFeed';

const App = (props) => (
  <MuiThemeProvider>
    <div className="App">
      <AppBar
        title={"Reactjs Reddit"}
        showMenuIconButton={false}
        iconElementRight={<FlatButton onClick={() => this.fetch('reactjs')} label="next" />
        }
      />
      <RedditFeed />
    </div>
  </MuiThemeProvider >
);

export default App;
