import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RedditPost from './RedditPost';
import PropTypes from 'prop-types'

class RedditFeed extends Component {
    componentWillMount () {
        this.props.dispatch('reactjs');
    }
    render () {
        return (
            <div className="container">
                {this.props.posts.map((post, index) =>
                    <RedditPost
                        info={post}
                        key={index} />
                )}
                <FlatButton
                    // onClick={() => this.fetch(this.props.subreddit)}
                    label="more"
                />
            </div>
        )
    }
}
RedditFeed.PropTypes = {
    subreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
}
export default RedditFeed;