import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

function subreddit (state = 'reactjs', action) {
    switch (action.type) {
        case types.CHANGE_SUBREDDIT:
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
const rootReducer = combineReducers({
    subreddit,
    view
});

export default rootReducer;