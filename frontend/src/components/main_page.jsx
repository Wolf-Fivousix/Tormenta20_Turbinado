import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCreature } from "../actions/creature_actions";

export default function MainPage(props) {
    const dispatch = useDispatch();
    const creatures = useSelector(state => state.creatures);
    const names = ["Wolf", "Diego", "Rex"];
    const namePlaceHolder = names[Math.floor(Math.random() * names.length )];
    const name = useFormInput("");
    const pv = useFormInput("");
    // const [name, setName] = useState("");
    // const [pv, setPv] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const creatureName = name.value || namePlaceHolder;

        const creature = {
            name: creatureName,
            pv: pv.value
        };
        
        dispatch(createCreature(creature))
            // .then(() => {
            //     setName("");
            //     setPv("");
            // });
    }

    // function handleName(e) {
    //     setName(e.target.value);
    // }

    // function handlePv(e) {
    //     setPv(e.target.value);
    // }

    const temporaryDisplay = Object.values(creatures).map(creature => <li>{`${creature.name}: ${creature.pv}`}</li>)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>TUDO é Lefeu!!</h1>
                <input type="text" placeholder={namePlaceHolder} { ...name }/>
                <input type="text" placeholder="PV" { ...pv }/>
                <button>Adicionar</button>
            </form>

            <ul>
                {temporaryDisplay}
            </ul>
        </div>
    );
};

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleValue(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleValue
    };
}