import React from 'react';

function Contact() {
    return (
        <div className="contact-me">
            <div className="row">
                <div className="col-lg-12 contact-container">
                    <h2>Contact Celina</h2>
                    <p>If you would like to contact me regarding freelance work or collaborative projects.</p>
                    <p>Please fill out the form below!</p>
                    <form action="https://formspree.io/f/xgepnkov" method="post" >
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input name="_replyto" type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                            <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="form-text">Enter your message below</label>
                            <input name="message" type="text" className="form-control" id="form-text"></input>
                            <button type="submit" className="btn btn-outline-secondary ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact;