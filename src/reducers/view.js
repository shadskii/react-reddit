import * as types from '../constants/ActionTypes';

export default function view (state = false, action) {
    switch (action.type) {
        case types.OPEN_MENU:
            return !state

        default:
            return state;

    }
}