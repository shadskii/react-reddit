import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import reddit_icon from '../reddit_icon.png';
import link_icon from '../link_icon.png';
import PropTypes from 'prop-types'

const RedditPost = props => {
    let post = props.info;
    let thumb = post.thumbnail;
    if (thumb === 'self') {
        thumb = reddit_icon;
    } else if (thumb === 'default') {
        thumb = link_icon;
    }
    return (
        <Card className="post-card">
            <CardHeader
                title={post.title}
                subtitle={post.author}
                actAsExpander={post.is_self}
                showExpandableButton={post.is_self}
                avatar={thumb}
            />

            <CardText expandable={post.is_self}>
                {post.selftext}
            </CardText>
            <CardActions>
                <FlatButton
                    label="View Post"
                    onClick={() => {
                        window.open(post.url);
                    }} />
            </CardActions>
        </Card>
    );
}
RedditPost.PropTypes = {
    data: PropTypes.object.isRequired
}
export default RedditPost;