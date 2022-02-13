import React from 'react';


const Footer = () => {
  return (
    <footer>
    <div className="socials">
    <a href="https://github.com/Adrian-szonyi"><img className="grow" id="footerimage1" src="/images/githubi.png" alt="github"></img>
    </a>
    <a href="https://www.linkedin.com/in/adrian-szonyi-3622514b/"><img className="grow" id="footerimage"  src="/images/output-onlinepngtools (1).png" alt="linkedin"></img>
    </a>
    <a href="https://www.instagram.com/adrian_szonyi/?hl=en"><img className="grow" id="footerimage"  src="/images/instagrami.png" alt="instagram"></img>
    </a>
  </div>
  <div id="email">
    <button id="resumebutton" type="button"><a href="images/Adrian Szonyi - Resume (2).pdf" download="Adrian Szonyi-Resume">Download Resume</a></button>
    <h3>Email: aszonyi49@gmail.com</h3>
    <h3>Mobile: 0408887232</h3>
  </div>
  </footer>
  );
};

export default Footer;
