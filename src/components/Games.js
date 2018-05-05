import React from 'react';

import './Games.css';


const games = () => {
    const game1 = {
        backgroundImage: "url(/img/minecraft.jpg)"
    }
    const game2 = {
        backgroundImage: "url(/img/fortnite.jpg)"
    }
    const game3 = {
        backgroundImage: "url(/img/crew2.jpg)"
    }
    const game4 = {
        backgroundImage: "url(/img/pillars.jpg)"
    }
    const game5 = {
        backgroundImage: "url(/img/halo5.jpg)"
    }
    const game6 = {
        backgroundImage: "url(/img/deadredemption.jpg)"
    }
    return(
        <section className="gameslist" id="games">
            <h3 className="title">Greatest Games</h3>
            <p>Here are the games THE GAMER loves to play.</p>
            <hr />
            <ul className="grid">
                <li className="small" style={game1}></li>
                <li className="large" style={game2}></li>
                <li className="large" style={game3}></li>
                <li className="small" style={game4}></li>
                <li className="small" style={game5}></li>
                <li className="large" style={game6}></li>
            </ul>
        </section>
    )
}

export default games;