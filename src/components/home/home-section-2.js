import React from 'react';
import Fade from 'react-reveal/Fade';
import { MONEY, TOW_TRUCK } from 'src/components/common/svg';
import { KEYBOARD_ARROW_RIGHT_ICON, KEYBOARD_ARROW_DOWN_ICON } from 'src/components/material-ui/icons';

function HomeSection2() {
  return (
    <section className="home-section-2" id='vehicule-scrap'>
      <h2>Recevez votre argent rapidement</h2>
      <div className='media'>
        <div className='tow-truck'>
          <img src={TOW_TRUCK} alt='Tow truck' />
        </div>
        {KEYBOARD_ARROW_RIGHT_ICON}
        <div className='payment'>
          <img src={MONEY} alt='Receive your payment' />
        </div>
      </div>
      <div className='mobile-media'>
        <div className='tow-truck'>
          <img src={TOW_TRUCK} alt='Tow truck' />
        </div>
        {KEYBOARD_ARROW_DOWN_ICON}
        <div className='payment'>
          <img src={MONEY} alt='Receive your payment' />
        </div>
      </div>
      <ul>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} Acceptez l'offre</li>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} Nous venons remorquer sans frais</li>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} Recevez le paiement direct</li>
      </ul>
    </section>
  );
};

export default HomeSection2;