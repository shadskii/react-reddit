import * as types from '../constants/ActionTypes';

export default function subreddit (state = 'reactjs', action) {
    switch (action.type) {
        case types.CHANGE_SUBREDDIT:
            return action.name;

        default:
            return state;
    }
}