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
    <div className='pricingComp'>
      {type === 'Advanced' ? <div className='mostPop'>Popular</div> : ''}
      <div className='pricingTop'>
        <span className='title'>{type}</span>
        <span className='price'>20€/Mo</span>
      </div>
      <hr />
      <div className='features'>
        {featureArr.map((feature) => (
          <Feature key={feature} feature={feature} />
        ))}
      </div>
      <div className='btncontainer'>
        <Button />
      </div>
    </div>
  );
};

export default PricingComp;
