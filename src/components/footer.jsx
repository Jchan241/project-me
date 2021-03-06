import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-icon-group">
            <div className="footer-icon">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/johnny-chan24/"></a>
            </div>
            <div className="footer-icon">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Jchan241"></a>
            </div>
            <div className="footer-icon">
              <i className="far fa-envelope"></i>
              <a href="mailto:johnchan24@gmail.com?Subject=Hi!"></a>
            </div>
          </div>
          <p>
            - Let's get in touch! -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
