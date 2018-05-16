import { combineReducers } from 'redux';
import subreddit from './subreddit';
import view from './view';

const rootReducer = combineReducers({
    subreddit,
    view
});

export default rootReducer;