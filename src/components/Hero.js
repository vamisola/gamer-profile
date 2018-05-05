import React from 'react';
import './Hero.css';

const hero = () => {
    const style = {
        backgroundImage: "url(/img/frontpage.jpg)"
    }
    return(
        <section className="hero">
            <div className="background-image" style={style} ></div>
                <div className="hero-content-area">
                    <h1>GAMES BEGIN </h1>
                    <h3>Let's Play Like There's No Tomorrow</h3>
                    <a href="" className="btn">Gamer's Tag</a>
                </div>
        </section>
    );
}

export default hero;