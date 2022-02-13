import React from 'react';

const Portfolio = () => {
  return (
      <div>
<div>
    <figure className="MyWork row">
      <div className='funnight'>
        <p className="funnighttext"><span className="project">A Fun Night In</span>Let fate decide your evening with a random movie and meal suggestion.
        <button><a href="https://github.com/Adrian-szonyi/FunNightIn">Github project</a></button>
      </p>
      </div>
      </figure>
      <figure className="Horiseon">
        <a href="https://adrian-szonyi.github.io/FunNightIn/"><img className="image1 grow" src="/images/funnightin.PNG" alt="FunNightIn website"/></a>
  </figure>
      <div className="row">
      <figure className="image2 grow">
        <a href="https://adrian-szonyi.github.io/WeatherApp/"><img
          src="/images/wather.png"
          className='image2'
          alt="Adrian's weatherapp"/></a>
      </figure>
      <div className='funnight'>
        <p className="funnighttext"><span className="project">The WeatherApp</span> in any city name and find our current weather and the 5 day forecast<button><a href="https://github.com/Adrian-szonyi/WeatherApp">Github project</a></button></p>
      </div>
      </div>
      <div className="row">
          <div className='funnight'>
          <p className="funnighttext"><span className="project">DayPlanner</span>Fill out your task list for the day.<button><a href="https://github.com/Adrian-szonyi/DayPlanner">Github project</a></button></p>
      <figure className="image3 grow">
        <a href="https://adrian-szonyi.github.io/DayPlanner/Develop/index.html"><img
          className="image3 grow"
          src="/images/DayPlanner.png"
          alt="Laptop next to some pens and a notepad"/></a>
      </figure>
    </div>
    </div>
  </div>

  <section className="Books">
    <h2 className="BookHeading">Books I'm Reading</h2>
    <figure>
      <img 
        className="book1"
        src="/images/WealthandPower.jpg"
        alt="Red book cover of Wealth and Power"/>
    </figure>
    <figure>
      <img 
        className="book2"
        src="/images/Thesquareandthetower.jpg"
        alt="Book cover of the Square and the Spire"/>
    </figure>
    <figure>
      <img className="book3"
        src="images/Thenewsilkroads.jpg"
        alt="Book cover of the New Silk Roads"/>
    </figure>
  </section>
  </div>

  );
}

export default Portfolio;