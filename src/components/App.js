import React from 'react';
import AppBar from 'material-ui/AppBar';
import '../styles/App.css';
import RedditFeed from './RedditFeed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import MenuDrawer from './MenuDrawer';

const App = ({ subreddit, actions, menu, posts }) => (
  <div className="wrapper">
    <MenuDrawer
      currentSubreddit={subreddit}
      toggleMenu={actions.toggleMenu}
      menu={menu}
    />
    <AppBar
      title={subreddit}
      showMenuIconButton={true}
      style={{ position: 'fixed' }}
      onLeftIconButtonClick={actions.toggleMenu}
    />
    <RedditFeed
      subreddit={subreddit}
      posts={posts}
      actions={actions}
    />
  </div>
);

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  menu: state.view,
  posts: state.posts.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
