import React from 'react';
import './About.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import faCameraRetro from '@fortawesome/fontawesome-free-solid/faCameraRetro';
import faFlagCheckered from '@fortawesome/fontawesome-free-solid/faFlagCheckered';
import faBicycle from '@fortawesome/fontawesome-free-solid/faBicycle';

const about = () => {
    return(
        <section className="aboutGamer" id="about">
            <h3 className="title">The Gamer</h3>
                <p>Ranked #1. The best player in the WORLD!</p>
                <hr />
                <ul className = "grid">
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} className="iconSize"/>
                        <h4>Who?</h4>
                        <p>You can call The Gamer - 'THE SLASHER'</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon ={faCameraRetro} className="iconSize"/> 
                        <h4>Where?</h4>
                        <p>In every platform of the best video game there is.</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon ={faFlagCheckered} className="iconSize"/>
                        <h4>When?</h4>
                        <p>Every second of the hour, 24 hours a day.</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon ={faBicycle} className="iconSize"/>
                        <h4>How?</h4>
                        <p>Go Online. Find, invite, join and try to shoot 'THE SLASHER'</p>
                    </li>
                </ul>
        </section>
    );
}

export default about;