import { combineReducers } from 'redux';
import creatureReducer from "./creature_reducer";

const rootReducer = combineReducers({
    creatures: creatureReducer
});

export default rootReducer;