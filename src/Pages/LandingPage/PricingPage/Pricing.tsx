import React from 'react';
import './Pricing.css';
import PricingComp from './PricingComp';

const Pricing = () => {
  const pricingType = ['Basic', 'Advanced', 'Professional'];

  return (
    <div className='pricing'>
      {pricingType.map((type: any) => (
        <PricingComp key={type} type={type} />
      ))}
    </div>
  );
};

export default Pricing;
