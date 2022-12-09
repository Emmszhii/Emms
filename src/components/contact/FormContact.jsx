import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_28ni9gq',
        'template_4z5a9js',
        form.current,
        '5cXj2SWSpDvlM9eBe'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((e) => console.log(e));

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="text" name="email" placeholder="Your Email" required />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message..."
        required
      />
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default FormContact;
