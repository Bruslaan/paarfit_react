import React from 'react';
import Button from './Button';
import Feature from './Feature';
import './PricingComp.css';

const PricingComp = ({ type }: any) => {
  const featureArr = [
    'This is a professional feature',
    'Best feature',
    'Another professional feature',
    'So many of these features',
    'Last prof feature',
  ];

  return (
    <div
      className={
        type.subPeriod === 'Jährlich'
          ? 'pricingComp recommended'
          : 'pricingComp'
      }
    >
      {type.subPeriod === 'Jährlich' ? (
        <div className='mostPop'>Popular</div>
      ) : (
        ''
      )}
      <div className='pricingTop'>
        <span className='pricingCompTitle'>{type.subPeriod}</span>
        <span className='price'>{type.price}</span>
        <span className='pricingCompTitle'>{type.priceSubTitle}</span>
        <span className='pricingCompTitle'>{type.advice}</span>
        <span className='pricingTest'>{type.testTitle}</span>

        <div className='btncontainer'>
          <Button />
        </div>
      </div>
      <hr
        className={
          type.subPeriod === 'Jährlich' ? 'pricingHR' : 'pricingHR white'
        }
      />
      <div className='body'>{type.body}</div>
    </div>
  );
};

export default PricingComp;
