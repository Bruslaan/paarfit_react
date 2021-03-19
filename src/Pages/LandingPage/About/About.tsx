import React from 'react';
import { aboutComps } from '../../../constants';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTitle'>Die PaarFit-Philosophie</div>
      <p className='aboutIntro'>
        Sport ist gesund, hält fit und hilft beim Stressabbau. Und trotzdem tust
        du dir schwer, die richtige Motivation zum Sport zu finden?
        Sporteinheiten sind nur dann erfolgreich, wenn du Spaß hast und gute
        Resultate erzielst. Deshalb haben wir ein perfekt abgestimmtes
        Partnertraining entwickelt, das euch als Paar nicht nur sportlich in
        Bestform bringt.
      </p>
      {aboutComps.map((item: any) => (
        <div className='aboutComp'>
          {!item.image ? (
            ''
          ) : (
            <div
              className='aboutCompImg'
              style={{ backgroundImage: `url(${item.image})` }}
            />
          )}
          <div className='aboutCompTitle'>{item.title}</div>
          <div className='aboutCompBody'>{item.body}</div>
          {item.hr ? <hr className='aboutHR' /> : ''}
        </div>
      ))}
    </div>
  );
};

export default About;
