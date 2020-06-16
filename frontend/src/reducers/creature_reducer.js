import { RECEIVE_NEW_CREATURE } from "../actions/creature_actions";

const creatureReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_NEW_CREATURE:
            return Object.assign({}, state, { [action.creature.id]: action.creature });

        default:
            return state;
    }

};

export default creatureReducer;