import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

class Cards extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    gamertag: PropTypes.string.isRequired,
    gameslist: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired
  }
  render() {
    const {name, gamertag, img} = this.props;
    const gameslist =
      this.props.gameslist.map((game, index) => (
        <li key={index}>{game}</li>
      ));
    return (
        <div className="cards">
            <div className="card">
                <span className = "card-image">
                    <img src={img} alt={name} />
                    <h3>{name}</h3>
                </span>
                <span className = "card-summary"> 
                <h5> Playing: </h5>
                    <ul>
                        {gameslist}
                    </ul>
                </span>
                <span className="card-meta">{gamertag}</span>
            </div>
        </div>
    );
  }
}

export default Cards;
