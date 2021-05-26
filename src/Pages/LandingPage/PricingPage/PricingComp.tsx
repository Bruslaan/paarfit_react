import React from 'react';
import Button from './Button';
import Feature from './Feature';
import './PricingComp.css';

const PricingComp = ({ type }: any) => {
  return (
    <div
      className={
        type.subPeriod === 'Jährlich'
          ? 'pricingComp recommended'
          : 'pricingComp recommended'
      }
    >
      {type.subPeriod === 'Jährlich' ? (
        <div className='mostPop'>Empfohlen</div>
      ) : (
        ''
      )}
      <div className='pricingTop'>
        <span className='pricingCompTitle'>{type.subPeriod}</span>
        <span className='price'>{type.price}</span>
        <span className='pricingCompTitle'>{type.priceSubTitle}</span>
        <span className='pricingCompTitle'>{type.advice}</span>
        <span className='pricingTest'>{type.testTitle}</span>

        <Button />
      </div>
      <hr className='pricingHR' />
      <ul className='pricingCompBody'>
        {type.body.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingComp;
