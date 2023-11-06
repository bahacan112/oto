import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { socialData } from '../../data.json';
const Header = ({ data }) => {
  const { logoDark, logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header>
      {/* Mob header */}
      <div className="mob-header" onClick={handleMobileToggle}>
        <div className="mob-h-left">
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" title="" alt="" src={logoDark} />
            <img className="logo-light" title="" alt="" src={logoLight} />
          </Link>
        </div>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? 'menu-open' : ''
        }`}
      >
        {/* Brand */}
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img
              className="logo-dark"
              title="Zen"
              alt="site-logo"
              src={logoDark}
            />
            <img
              className="logo-light"
              title="Zen"
              alt="site-logo"
              src={logoLight}
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Ana Sayfa
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Hakkımızda
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Hizmetler
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="work"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Referanslar
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Örnek Çalışmalar
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              İletişim
            </ScrollLink>
          </li>
          <br></br><br></br>
          <li>
    <a
      href="https://wa.me/905061175807"
      target="_blank"
      rel="noopener noreferrer"
    >  WhatsApp Mesaj

      
    </a>
  </li>
        </ul>
        <ul className="nav social-link">
          {socialData.map((element, index) => (
            <li key={index}>
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
