import { combineReducers } from 'redux';
import { creatureReducer } from "./creatureReducer";

const rootReducer = combineReducers({
    creatures: creatureReducer
});

export default rootReducer;