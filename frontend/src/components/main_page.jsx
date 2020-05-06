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