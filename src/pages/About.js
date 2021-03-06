import React from 'react';
import Headshot from '../images/1575168097728.jfif'

export default function About() {
  return (
    <div className='Aboutpage'>
        <img className='headshot'
        src={Headshot}
        alt="Adrian Szonyi"/>
        <p id="about-me-description">
          I currently manage a team of Account Managers at a video tech company
          and I'm studying to become a front-end developer. <br /><br />
          I have created a handful of useful websites that you can check out
         by clicking "Portfolio". Click the images to check out the live sites.
          <br /><br />
          I love playing tennis and reading history books. Feel free to get in touch!
          <br/>
        </p>
      </div>
  );
}
