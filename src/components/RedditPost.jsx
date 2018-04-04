import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RedditPost = props => {
    let post = props.info;
    return (
        <Card className="post-card">
            <CardHeader
                title={post.title}
                subtitle={post.author}
                actAsExpander={post.is_self}
                showExpandableButton={post.is_self}
            />

            <CardText expandable={post.is_self}>
                {post.selftext}
            </CardText>
            <CardActions>
                <FlatButton label="View Post" onClick={() => {
                    window.open(post.url);
                }} />
            </CardActions>
        </Card>
    );
}

export default RedditPost;