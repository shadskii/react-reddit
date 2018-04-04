import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RedditPost from './RedditPost';

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
        if (url) {
            fetch('https://www.reddit.com/r/' + url + '.json?count=' + 25 + '&after=' + this.state.lastPostName)
                .then((response) => response.json())
                .then((result) => {
                    that.setState({
                        posts: result.data.children,
                        lastPostName: result.data.children[result.data.children.length - 1].data.name
                    });
                });
        }
    }
    componentWillMount() {
        this.fetch("reactjs");
    }
    render() {
        return (
            <div className="container">
                {this.state.posts.map(function (el, index) {
                    return <RedditPost info={el.data} key={index} />
                })}
                <FlatButton onClick={() => this.fetch('reactjs')} label="more" />
            </div>
        )
    }
}
export default RedditFeed;