import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/emmanuel-manalo-22816a233/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Emmszhii"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
