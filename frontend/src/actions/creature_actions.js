import axios from "axios";

export const RECEIVE_NEW_CREATURE = "RECEIVE_NEW_CREATURE";

const receiveNewCreature = creature => ({
    type: RECEIVE_NEW_CREATURE,
    creature
});

export const createCreature = creature => dispatch => (
    axios.post("http://localhost:5000/creatures", creature)
        // Because of the fake DB the data returns as "response.data"
        .then(({ data }) => dispatch(receiveNewCreature(data)))
);