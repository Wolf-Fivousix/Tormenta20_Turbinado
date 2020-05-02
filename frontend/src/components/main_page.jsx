import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function MainPage(props) {
    const dispatch = useDispatch();
    const names = ["Wolf", "Diego", "Rex"];
    const namePlaceHolder = names[Math.floor(Math.random() * names.length )];
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name);
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