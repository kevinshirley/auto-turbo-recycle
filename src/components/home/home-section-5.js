import React from 'react';
import Fade from 'react-reveal/Fade';
import useI18n from 'src/hooks/use-i18n';

function HomeSection5() {
  const i18n = useI18n();
  return (
    <section className="home-section-5">
      <div className='auto-offer'>
        <p className='price-condition'>Jusqu'à</p>
        <h3>1500$</h3>
        <p className='price-condition'>Pour votre auto scrap</p>
        <p className='price-description'>L'offre varie selon le prix courant du métal, le poids et l'état du véhicule.</p>
      </div>
      <hr />
      <div className='auto-offer'>
        <p className='price-condition'>Jusqu'à</p>
        <h3>3000$</h3>
        <p className='price-condition'>{i18n.t('intro.text')}</p>
        <p className='price-description'>L'agent au téléphone pourra vous donnez une offre, pour votre véhicule usagé, selon les informations de l'état du véhicule que vous allez nous fournir.</p>
      </div>
    </section>
  );
};

export default HomeSection5;
