import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Cards from './Cards';

class Card extends Component {
    static defaultProps = {
        gamers: [{
                name: "John",
                gamertag: "The Punisher",
                gameslist: ["minecraft", "roblox"],
                img: "/img/gamer1.jpg"
            },
            {
                name: "Kaley",
                gamertag: "Ripley",
                gameslist: ["roblox"],
                img: "/img/gamer2.jpg"
            },
            {
                name: "Travis",
                gamertag: "CrazyMan",
                gameslist: ["minecraft"],
                img: "/img/gamer3.jpg"
            },
            {
                name: "Brandon",
                gamertag: "The Manhunt",
                gameslist: ["COD", "Halo5", "minecraft"],
                img: "/img/gamer4.jpg"
            },
            {
                name: "Jane",
                gamertag: "MEisMe",
                gameslist: ["Halo5"],
                img: "/img/gamer5.jpg"
            }
        ]
    }
    static propTypes = {
        gamers: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render(){           
        const gamers = this.props.gamers.map((r,index) => (
            <Cards key={index} {...r} />));

        return (
            <section className="game-list">
                <h2>The Dream Team</h2>
                <p>These are THE SLASHERS' team mates. Nobody won against them in a game, ever!</p><hr />
                {gamers}
            </section>
        )
    }
}
export default Card;