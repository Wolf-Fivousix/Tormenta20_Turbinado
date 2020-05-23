import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCreature } from "../actions/creature_actions";

export default function MainPage(props) {
    const dispatch = useDispatch();
    const creatures = useSelector(state => state.creatures);
    const names = ["Wolf", "Diego", "Rex"];
    const namePlaceHolder = names[Math.floor(Math.random() * names.length )];
    const [name, setName] = useState("");
    let creatureCounter = 0;
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

            // Better yet! Since all this logic is living in the component at the moment(page refresh erases it)
            // let's make a counter that keeps track of the creature ID.
            // Once the page is refreshed and all creatures disapear, the counter also resets!
            // [Object.keys(creatures).length] : {
            //     name: name
            // }

            // Code snippet from a different project where there is an auto generation of ID based on the latest one:
            // const getNextId = () => _.parseInt( _.maxBy(Object.keys(notes), _.parseInt)) + 1;

            id: creatureCounter,
            name: name,
            pv: 0
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