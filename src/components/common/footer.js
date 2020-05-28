import React from 'react';
import { AUTO_TURBO_LOGO } from 'src/components/common/images';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';

function Footer() {
  const today = new Date(), year = today.getFullYear();

  return (
    <div className='footer'>
      <div className='logo'>
        <img src={AUTO_TURBO_LOGO} alt='Auto Turbo Logo' />
      </div>
      <div className='menu-links'>
        <div className='link'>
          <a href='#fonctionnement'>Fonctionnement</a>
        </div>
        <div className='link'>
          <a href='#vehicule-scrap'>Véhicule Scrap</a>
        </div>
        <div className='link'>
          <a href='#contact'>Contact</a>
        </div>
      </div>
      <div className='schedule'>
        <span className='label'>Lundi au Vendredi</span>
        <span>07:00 - 21:00</span>
        <span className='label'>Samedi au Dimanche</span>
        <span>07:00 - 18:00</span>
      </div>
      <div className='contact'>
        <PhoneNumberMainCta />
      </div>
      <div className='copyright'>
        <small>© {year} Auto Turbo, All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
