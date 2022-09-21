
import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';
import '../styles/index.css';
// import emailjs from '@emailjs/browser';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;
     

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
  
    
    
return (
    <section class="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">Contact Me</h1>
        <hr></hr>
        <form class="justify-content-center" 
                id="contact-form">
                {/* ref={form} */}
                {/* onSubmit={sendEmail} */}
            <div>
                <label htmlFor="name">Name:</label>
                <input class="form-control" 
                 type="text" 
                name="user_name"
                defaultValue={name} 
                onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="Email">Email:</label>
                <input class="form-control" 
                type="email"  
                name="user_email" 
                defaultValue={email} 
                onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" 
                name="message" 
                defaultValue={message} 
                onBlur={handleChange} 
                rows="7"
                input type="submit"
                />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div>
            <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;