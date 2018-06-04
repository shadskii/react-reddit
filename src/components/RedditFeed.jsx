import React, { Component } from 'react';
import RedditPost from './RedditPost';
import PropTypes from 'prop-types'

class RedditFeed extends Component {
    componentWillMount () {
        this.props.actions.fetchPostsIfNeeded('reactjs');
    }
    componentDidUpdate (prevProps) {
        if (this.props.subreddit !== prevProps.subreddit) {
            const { actions, subreddit } = this.props
            actions.fetchPostsIfNeeded(subreddit);
        }
    }
    render () {
        return (
            <div className="container-fluid content-scroll">
                {this.props.posts.map((post, index) =>
                    <div key={index} className='col-md-3'>
                        <RedditPost
                            info={post}
                            key={index} />
                    </div>
                )}
            </div>
        )
    }
}
RedditFeed.PropTypes = {
    subreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
}
export default RedditFeed;