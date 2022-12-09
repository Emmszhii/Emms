import React from 'react';
import ContactOption from './ContactOption';
import FormContact from './FormContact';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <ContactOption />
        <FormContact />
      </div>
    </section>
  );
};

export default Contact;
