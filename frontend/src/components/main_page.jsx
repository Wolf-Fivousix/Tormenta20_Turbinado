import React from "react";

export default function MainPage(props) {
    const names = ["Wolf", "Diego", "Rex"];
    const name = names[Math.floor(Math.random() * (names.length))];

    return (
        <form action="">
            <h1>TUDO é Lefeu!!</h1>
            <input type="text" placeholder={name}/>
            <input type="text" placeholder="PV"/>
            <button>Adicionar</button>
        </form>
    );
};