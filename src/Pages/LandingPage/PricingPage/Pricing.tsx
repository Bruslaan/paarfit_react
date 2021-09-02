import React from 'react';
import './Pricing.css';
import PricingComp from './PricingComp';
import {pricingPackage} from '../../../constants';

const Pricing = ({title}: any) => {
    return (
        <div className='pricing'>
            <div className='pricingTitle'>
                {title || <div>Jetzt 14 Tage&nbsp;<span className='landingPageSpan'>kostenlos</span>
                    &nbsp;testen!</div>}
            </div>
            <br/>
            <br/>

            <div className='pricingCompContainer'>
                {pricingPackage.map((type: any, key: any) => (
                    <PricingComp type={type} key={key}/>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
