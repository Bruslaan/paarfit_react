import React from 'react';
import ReviewComp from './ReviewComp';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className='reviewsBG'>
        <div className='reviewTitle'>...UND WAS SAGEN UNSERE MITGLIEDER?</div>
        <p className='reviewSubtitle'>
          Echte Erfahrungen und beeindruckende Resultate
        </p>
        <div className='reviewsComp'>
          <ReviewComp  name="Thomas & Susann" text="Wir sind beruflich eingespannt und freuen uns, dass wir dank PaarFit den gemeinsamen Sport als Quality time in unseren Alltag einbinden können. Die Rezepte sind unaufwendig und lecker – perfekt, wenn man nicht stundenlang in der Küche stehen und trotzdem was Gesundes essen will!"/>
          <ReviewComp  name="Miri & Raphael" text="Das passende Onlinetraining zu finden ist wirklich nicht leicht. Wir haben schon so viel Geld für sinnlose Apps ausgegeben, wo das Training entweder langweilig war oder es einfach nicht zu unserem Fitnesslevel gepasst hat.  Aber PaarFit macht uns super viel Spaß - wir bleiben dran!"/>
          <ReviewComp name="Sandra & Ella" text="Wir machen beide schon länger  Sport – aber jetzt haben wir endlich was gefunden, das uns wirklich weiter bringt. Die Übungen sind leicht zu verstehen und trotzdem super effektiv. Und zusammen ist man auf jeden Fall top motiviert!"/>
        </div>
        <a href='/registrieren' style={{ textDecoration: 'none' }}>
          <button className='paarfit_button'>
            Kostenlos testen
            <svg
              className='arroIcon'
              height='20px'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
