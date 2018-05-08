import * as types from '../constants/ActionTypes';

export const changeSubreddit = name => ({
    type: types.CHANGE_SUBREDDIT,
    name: name
});

export const toggleMenu = () =>({
    type: types.OPEN_MENU
})