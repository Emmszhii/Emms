import React from 'react';
import './footer.css';
import FooterSocials from './FooterSocials';
import PermaLinks from './PermaLinks';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        EMMS
      </a>
      <PermaLinks />
      <FooterSocials />
      <div className="footer__copyright">
        <small>&copy; Emms Portfolio Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
