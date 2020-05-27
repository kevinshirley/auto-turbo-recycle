import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'src/components/material-ui/text-button';
import { IPHONE_ICON, CHECK_CIRCLE_ICON } from 'src/components/material-ui/icons';
import { CAR_BREAKDOWN } from 'src/components/common/svg';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';

function HomeSection1() {
  return (
    <section className="home-section-1">
      <div className="inner">
        <h1>On achète votre véhicule scrap</h1>
        <div className='details'>
          <div className='list'>
            <ul>
              <li>{CHECK_CIRCLE_ICON} Paiement cash le jour même</li>
              <li>{CHECK_CIRCLE_ICON} Aucun frais de remorquage</li>
              <li>{CHECK_CIRCLE_ICON} Meilleure offre sur le marché</li>
            </ul>
          </div>
          <div className='media'>
            <img src={CAR_BREAKDOWN} alt='Car on the tow truck' />
          </div>
        </div>
        <h5>Appelez nous pour recevoir une offre</h5>
        <PhoneNumberMainCta />
      </div>
    </section>
  );
}

export default HomeSection1;
