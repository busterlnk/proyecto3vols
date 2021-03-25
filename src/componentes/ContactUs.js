import React from 'react';
import './../estilos/contactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_r3f4f4h', 'template_rr7tzu6', e.target, 'user_PJsSPtN3vtsQ0VD0VdEAy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return ( 
        
        <div>
            <div className="main">
                <form className="form" onSubmit={sendEmail}>
                    <label for="name">Name</label>
                    <input type="text" className="name" id="name" placeholder="Enter your Name" />

                    <label for="email">E-mail</label>
                    <input type="email" className="email" id="email" placeholder="Enter your E-mail" />
                    
                    <label for="subject">Subject</label>
                    <input type="subject" className="subject" id="subject" placeholder="Subject" />

                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter a message"></textarea>
                    
                    <button type="submit" id="submit" className="btn btn-submit submit" value="Send">Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default ContactUs;