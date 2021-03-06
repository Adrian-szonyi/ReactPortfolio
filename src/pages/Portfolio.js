import React from 'react';
import FunnightIn from '../images/funnightin.PNG'
import WeatherApp from '../images/wather.png'
import DayPlanner from '../images/DayPlanner.png'
import TeamFit from '../images/teamfit123123.herokuapp.com_ (1).png'
import NoteTaker from '../images/notetaker app.png'
import BookSearch from '../images/localhost_3000_.png'
import Square from '../images/Thesquareandthetower.jpg'
import SilkRoad from '../images/Thenewsilkroads.jpg'
import Wealth from '../images/WealthandPower.jpg'

const Portfolio = () => {
  return (
      <div>
<div>
<div className="row">
      <figure className="image2 grow">
        <a href="https://adrian-szonyi.github.io/FunNightIn/"><img
          src={FunnightIn}
          className='image2'
          alt="Adrian's Funnightin"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">A Fun Night In<br></br></span> Let fate decide your evening with a random movie and meal suggestion.<br></br><button><a href="https://github.com/Adrian-szonyi/FunNightIn">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://adrian-szonyi.github.io/WeatherApp/"><img
          src={WeatherApp}
          className='image2'
          alt="Adrian's weatherapp"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">The WeatherApp<br></br></span> in any city name and find our current weather and the 5 day forecast<br></br><button><a href="https://github.com/Adrian-szonyi/WeatherApp">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://adrian-szonyi.github.io/DayPlanner/Develop/index.html"><img
          src={DayPlanner}
          className='image2'
          alt="Adrian's DayPlanner"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">DayPlanner<br></br></span> Fill out your task list for the day.<br></br><button><a href="https://github.com/Adrian-szonyi/DayPlanner">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://teamfit123123.herokuapp.com/"><img
          src={TeamFit}
          className='image2'
          alt="Adrian's TeamFit"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">TeamFit<br></br></span> Post new challenges and request to join open Challenges.<br></br><button><a href="https://github.com/Adrian-szonyi/TeamFit">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://dry-depths-40629.herokuapp.com/"><img
          src={BookSearch}
          className='image2'
          alt="Adrian's booksearch"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">BookSearch<br></br></span> Sign up and start searching for any book to add to your profile.<br></br><button><a href="https://github.com/Adrian-szonyi/BookSearch">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://adrian-szonyi.github.io/NoteTaker"><img
          src={NoteTaker}
          className='image2'
          alt="Adrian's NoteTaker"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">NoteTaker App<br></br></span> Add and delete your tasks for your day<br></br><button><a href="https://github.com/Adrian-szonyi/NoteTaker">Github project</a></button></p>
      </div>
      </div>
  </div>
  

  <section className="Books">
    <h2 className="BookHeading">Books I'm Reading</h2>
    <figure>
      <img 
        className="book1"
        src={Wealth}
        alt="Red book cover of Wealth and Power"/>
    </figure>
    <figure>
      <img 
        className="book2"
        src={Square}
        alt="Book cover of the Square and the Spire"/>
    </figure>
    <figure>
      <img className="book3"
        src={SilkRoad}
        alt="Book cover of the New Silk Roads"/>
    </figure>
  </section>
  </div>

  );
}

export default Portfolio;