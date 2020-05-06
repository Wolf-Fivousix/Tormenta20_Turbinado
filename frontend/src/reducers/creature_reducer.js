import { CREATE_CREATURE } from "../actions/creature_actions";

const creatureReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case CREATE_CREATURE:
            return Object.assign({}, action.creature);

        default:
            return state;
    }

};

export default creatureReducer;