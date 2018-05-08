import * as types from '../constants/ActionTypes';

export default function view(state = false,action){
    switch(action.types){
        case types.OPEN_MENU:
        console.log(state)
            return
                menu: !state
            
        default:
            return state;

    }
}