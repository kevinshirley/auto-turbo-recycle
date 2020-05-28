import React from 'react';
import Fade from 'react-reveal/Fade';
import { TELEPHONE } from 'src/components/common/svg';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';

function HomeSection4() {
  return (
    <section className="home-section-4">
      <div className='phone-icon'>
        <img src={TELEPHONE} alt='Appeler nous' />
      </div>
      <div className='steps'>
        <div className='step'>
          <h4>Contact</h4>
          <p>Appeler nous dès maintenant. Simplement nous fournir la marque du véhicule, le modèle, l'année, l'état du véhicule et la raison que vous voulez recycler le véhicule.</p>
        </div>
        <div className='step'>
          <h4>Collect</h4>
          <p>Dès que vous acceptez l'offre de l'un de nos agents, nous pourrons envoyer l'un de nos recycleur à votre adresse pour recycler le véhicule et vous remettre votre argent comptant.</p>
        </div>
      </div>
      <PhoneNumberMainCta reverted />
    </section>
  );
};

export default HomeSection4;