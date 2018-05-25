import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

function subreddit (state = 'reactjs', action) {
    switch (action.type) {
        case types.SELECT_SUBREDDIT:
            return action.name;
        default:
            return state;
    }
}
function view (state = false, action) {
    switch (action.type) {
        case types.OPEN_MENU:
            return !state
        default:
            return state;
    }
}

function posts (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case types.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case types.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case types.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    subreddit,
    posts,
    view
});

export default rootReducer;