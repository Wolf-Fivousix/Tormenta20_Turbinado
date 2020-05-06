export const RECEIVE_NEW_CREATURE = "RECEIVE_NEW_CREATURE";

const receiveNewCreature = creature => ({
    type: RECEIVE_NEW_CREATURE,
    creature
});

export const createCreature = creature => dispatch => (
    dispatch(receiveNewCreature(creature))
);