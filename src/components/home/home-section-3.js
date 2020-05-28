import React from 'react';
import Fade from 'react-reveal/Fade';
import { MONEY, CAR_RECYCLE, ECO } from 'src/components/common/svg';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';
import { KEYBOARD_ARROW_RIGHT_ICON } from 'src/components/material-ui/icons';

function HomeSection3() {
  return (
    <section className="home-section-3" id='fonctionnement'>
      <h2>Une solution qui se déplace à vous</h2>
      <div className='cards'>
        <div className='row row-1'>
          <div className='content'>
            <div className='image'>
              <img src={CAR_RECYCLE} alt='Recycle your car' />
            </div>
            <div className='card'>
              <h3>Véhicule en tout état</h3>
              <p>On s'occupe de venir remorquer votre véhicule accidenté, rouillé, avec problème de mécanique, etc. Quelque soit le problème, on vous aide à l'éliminer en venant recycler votre auto pour vous sans frais.</p>
              <a href='tel:5144334978'>Appeler nous maintenant {KEYBOARD_ARROW_RIGHT_ICON}</a>
            </div>
          </div>
        </div>
        <div className='row row-2'>
          <div className='content'>
            <div className='image'>
              <img src={MONEY} alt='Recycle your car' />
            </div>
            <div className='card'>
              <h3>Une offre imbattable</h3>
              <p>Plus besoin de vous déplacez. Simplement nous appeler pour recevoir une proposition incomparable pour votre véhicule, en quelques minutes, avec l'un de nos agent.</p>
              <a href='tel:5144334978'>Appeler nous maintenant {KEYBOARD_ARROW_RIGHT_ICON}</a>
            </div>
          </div>
        </div>
        <div className='row row-3'>
          <div className='content'>
            <div className='image'>
              <img src={ECO} alt='Recycle your car' />
            </div>
            <div className='card'>
              <h3>Recycle ton auto</h3>
              <p>Nous récuperons les pièces du véhicule pour donner une nouvelle vie aux éléments réutilisables. Vous contribuez au bien de la planète en nous permettant de réutiliser les pièces de votre auto scrap.</p>
              <a href='tel:5144334978'>Appeler nous maintenant {KEYBOARD_ARROW_RIGHT_ICON}</a>
            </div>
          </div>
        </div>
      </div>
      <PhoneNumberMainCta />
    </section>
  );
};

export default HomeSection3;