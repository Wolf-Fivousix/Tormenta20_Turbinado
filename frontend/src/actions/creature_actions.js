export const CREATE_CREATURE = "CREATE_CREATURE";

const receiveNewCreature = creature => ({
    type: CREATE_CREATURE,
    creature
});

export const createCreature = creature => dispatch => (
    dispatch(receiveNewCreature(creature))
);