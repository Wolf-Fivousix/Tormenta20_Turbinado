import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCreature } from "../actions/creature_actions";
import axios from "axios";

export default function MainPage(props) {
    const dispatch = useDispatch();
    const creatures = useSelector(state => state.creatures);
    const names = ["Wolf", "Diego", "Rex"];
    const namePlaceHolder = names[Math.floor(Math.random() * names.length )];
    const [name, setName] = useState("");
    const [pv, setPv] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const creatureName = name || namePlaceHolder;

        const creature = {
            name: creatureName,
            pv
        };
        
        dispatch(createCreature(creature))
            .then(() => {
                setName("");
                setPv("");
            });
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handlePv(e) {
        setPv(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>TUDO é Lefeu!!</h1>
            <input type="text" placeholder={namePlaceHolder} onChange={handleName} value={name}/>
            <input type="text" placeholder="PV" onChange={handlePv} value={pv}/>
            <button>Adicionar</button>
        </form>
    );
};