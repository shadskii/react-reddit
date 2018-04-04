import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RedditPost = props => {
    return (
        <Card className="post-card">
            <CardHeader
                title={props.info.title}
                subtitle={props.info.author}
                actAsExpander={props.info.is_self === true}
                showExpandableButton={props.info.is_self}
            />

            <CardText expandable={props.info.is_self}>
                {props.info.selftext}
            </CardText>
            <CardActions>
                <FlatButton label="View Post" onClick={() => {
                    window.open(props.info.url);
                }} />

            </CardActions>
        </Card>
    );
}

export default RedditPost;