import React from 'react';
import AppBar from 'material-ui/AppBar';
import '../styles/App.css';
import RedditFeed from './RedditFeed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const App = ({subreddit, actions}) => (
  <div className="App">
    <AppBar
      title= {subreddit}
      showMenuIconButton={false}
    />
    <RedditFeed
      subreddit={subreddit}
    />
  </div>
);

const mapStateToProps = state => ({
  subreddit: state.subreddit
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
