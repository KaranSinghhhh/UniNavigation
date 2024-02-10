import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const [emailSent, setEmailSent] = useState(false);
    const [userEmail, setUserEmail] = useState(''); // State to store the user's email
    const [message, setMessage] = useState('');

    const handleSendClick = () => {
        if (!userEmail || !message) {
            alert('Please fill in both your email and message.');
            return;
        }

        const templateParams = {
            from_email: userEmail, // User's email to reply to
            message_html: message, // User's message
            to_email: 'BaruchNavigation@gmail.com', // Your email
        };

        console.log("Sending email with parameters:", templateParams); // Add this line to debug


        emailjs.send('service_6pied5f', 'template_2lauj4m', templateParams, 'xD2NGYpgxZlVdJz3q')
                
        .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setEmailSent(true);
                setUserEmail(''); // Clear user email
                setMessage(''); // Clear message
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="contact-card">
            <h1>Have any questions, suggestions, or concerns? Send a message.</h1>
            <input
                type="email"
                className="contact-email-input"
                placeholder="Your email address..."
                value={userEmail}
                onChange={handleEmailChange}
            />
            <textarea
                className="contact-message-box"
                placeholder="Your message here..."
                value={message}
                onChange={handleMessageChange}
            />
            <button className="send-button" onClick={handleSendClick}>
                {emailSent ? "Message Sent" : "Send"}
            </button>
        </div>
    );
}

export default Contact;



