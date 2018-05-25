import * as types from '../constants/ActionTypes';

const FEEDSIZE = 25;

export const toggleMenu = () => ({
    type: types.OPEN_MENU
});

export const invalidateSubreddit = (subreddit) => ({
    type: types.INVALIDATE_SUBREDDIT,
    subreddit
});

export const selectSubreddit = (subreddit) => ({
    type: types.SELECT_SUBREDDIT,
    name: subreddit
});

const requestPosts = (subreddit) => ({
    type: types.REQUEST_POSTS,
    subreddit
});

const receivePosts = (subreddit, json) => {
    let jsonPosts = json.data.children.map(child => child.data);
    return {
        type: types.RECEIVE_POSTS,
        subreddit,
        posts: jsonPosts,
        lastPost: jsonPosts[jsonPosts.length - 1].name
    }
};

const fetchPosts = (subreddit) => {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json?count=${FEEDSIZE}`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    }
};

const shouldFetchPosts = (state, subreddit) => {
    return true; //TODO: Implement logic 
};

export const fetchPostsIfNeeded = (subreddit) => {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit));
        }
    }
};
