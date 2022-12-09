import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const ContactOption = () => {
  return (
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon" />
        <h4>Email</h4>
        <h5>emmanuelmanalo707@gmail.com</h5>
        <a
          href="mailto:emmanuelmanalo707@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send a message
        </a>
      </article>
      <article className="contact__option">
        <RiMessengerLine className="contact__option-icon" />
        <h4>Messenger</h4>
        <h5>Emmszhii</h5>
        <a
          href="https://facebook.com/Emmszhii"
          target="_blank"
          rel="noreferrer"
        >
          Send a message
        </a>
      </article>
      <article className="contact__option">
        <BsWhatsapp className="contact__option-icon" />
        <h4>Whatsapp</h4>
        <h5>+63 916 260 6048</h5>
        <a
          href="https://api.whatsapp.com/send?phone+639162606048"
          target="_blank"
          rel="noreferrer"
        >
          Send a message
        </a>
      </article>
    </div>
  );
};

export default ContactOption;
