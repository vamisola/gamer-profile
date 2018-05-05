import React from 'react';
import './ContactUs.css';

const contactus = () => {
    return(
        <section id="contactUs" className="contact">
            <h3 className="title">Learn more</h3>
                <p>Want to know about The Slasher's upcoming gamer events? Just sign up for the mailing list. No spam, promise! Except for the spam we give you to keep up your energy while you're hiking playing games. The Slasher have tons of that.</p>
                <hr />
                <form>
                <input type="email" placeholder="Email" />
                <a href="" className="btn">Subscribe now</a>
                </form>
        </section>
    );
}

export default contactus;