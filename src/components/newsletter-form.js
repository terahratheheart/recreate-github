import React from 'react';
import "./newsletter-form.css"

const NewsletterForm = () =>{
    return <section className="newsletter__section">
        <form className="newsletter__form">
            <input className="newsletter__input" type="email" placeholder="Email address"></input>
        </form>
        <button className="newsletter__button">Sign up for Github</button>
    </section>
}

export default NewsletterForm