import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCreature } from "../actions/creature_actions";

export default function MainPage(props) {
    const dispatch = useDispatch();
    const creatures = useSelector(state => state.creatures);
    const names = ["Wolf", "Diego", "Rex"];
    const namePlaceHolder = names[Math.floor(Math.random() * names.length )];
    const [name, setName] = useState("");

    // console.log(Object.keys(creatures));

    function handleSubmit(e) {
        e.preventDefault();
        const creature = {
            // So this right here is not working. Why?
            // If I delete one of the creatures in the middle of the object, the next
            // saved creature will overwrite the last one. Not good.
            // I could, upon deletion, re-construct the array.... But then again, how will I know which 
            // Creature I am deleting without an ID?
            // Should I just create the database to store ID's? I thought I could do this with no DB whatsoever....
            [Object.keys(creatures).length] : {
                name: name
            }
        };

        dispatch(createCreature(creature));
        setName("");
    }

    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>TUDO é Lefeu!!</h1>
            <input type="text" placeholder={namePlaceHolder} onChange={handleName} value={name}/>
            <input type="text" placeholder="PV"/>
            <button>Adicionar</button>
        </form>
    );
};