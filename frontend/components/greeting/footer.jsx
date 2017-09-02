import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/elicsiegel/Medio">
        <svg width="24" height="24">
          <image width="24" height="24" xlinkHref={window.staticImages.github_img} />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/eli-siegel-a26a3b73/">
        <svg width="24" height="24">
          <image width="24" height="24" xlinkHref={window.staticImages.linkedIn_img} />
        </svg>
      </a>
    </div>
  );
};

export default Footer;