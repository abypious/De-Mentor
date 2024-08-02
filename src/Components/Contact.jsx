import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Send the form data using EmailJS
    emailjs.sendForm('service_blfm97n', 'template_9j91iwl', event.target, 'OIrhWrHv0oSqtqiy6')
      .then((result) => {
        console.log("Success:", result.text);
        toast.success("MESSAGE SENT SUCCESSFULLY !!");
        
        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate('/mainpage'); // Redirect to home page
        }, 2000);
      }, (error) => {
        console.log("Error:", error.text);
        toast.error("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT US</span>
              </div>
              <div className="app-contact">CONTACT INFO : DEMENTOR.HELP@GMAIL.COM</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" id="name" name="name" type='text' placeholder="NAME" required />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" id="email" name="email" type='email' placeholder="EMAIL" required />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" id="subject" name="subject" type='text' placeholder="SUBJECT" required />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" type='text' name="message" placeholder="MESSAGE" required />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" type='reset'>CANCEL</button>
                    <button className="app-form-button" type='submit'>SEND</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
