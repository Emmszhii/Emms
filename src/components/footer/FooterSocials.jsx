import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a href="https://facebook.com/Emmszhii">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/Emmszhii">
        <FiInstagram />
      </a>
      <a href="https://twitter.com/Emmszhii">
        <IoLogoTwitter />
      </a>
    </div>
  );
};

export default FooterSocials;
