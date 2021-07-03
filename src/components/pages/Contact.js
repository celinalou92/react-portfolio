import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name:'',_replyto: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, _replyto, message } = formState;

    // function to record change in state on blur
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
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
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    };
    // function to detect form submissions
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
    return (
        <div className="contact-me">
            <div className="row">
                <div className="col-lg-12 contact-container">
                    <h2>Contact Celina</h2>
                    <p>If you would like to contact me regarding freelance work or collaborative projects.</p>
                    <p>Please fill out the form below!</p>
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/xgepnkov" method="post" >
                    <div className="form-group">
                            <label for="name">Your Name:</label>
                            <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp"  defaultValue={name} onBlur={handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input name="_replyto" type="email" className="form-control" id="email" aria-describedby="emailHelp"  defaultValue={_replyto} onBlur={handleChange}></input>

                            <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="form-text">Enter your message below</label>

                            <input name="message" type="text" className="form-control" id="form-text" defaultValue={message} onBlur={handleChange}></input>

                            <button type="submit" className="btn btn-outline-secondary ">Submit</button>
                            {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact;