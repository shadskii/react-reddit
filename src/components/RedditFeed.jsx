import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RedditPost from './RedditPost';
import PropTypes from 'prop-types'

class RedditFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            lastPostName: ''
        };
    }
    fetch(url) {
        var that = this;
        console.log(url);
        if (url) {
            fetch('https://www.reddit.com/r/' + url + '.json?count=' + 25 + '&after=' + this.state.lastPostName)
                .then((response) => response.json())
                .then((result) => {
                    that.setState({
                        posts: result.data.children,
                        lastPostName: result.data.children[result.data.children.length - 1].data.name
                    });
                }).catch((err)=>{
                    console.log(err);
                });
        }
    }
    componentWillMount() {
        this.fetch(this.props.subreddit);
    }
    render() {
        return (
            <div className="container">
                {this.state.posts.map((el, index) =>
                    <RedditPost info={el.data} key={index} />
                )}
                <FlatButton
                    onClick={() => this.fetch(this.props.subreddit)}
                    label="more"
                />
            </div>
        )
    }
}
RedditFeed.PropTypes = {
    subreddit: PropTypes.string.isRequired
}
export default RedditFeed;