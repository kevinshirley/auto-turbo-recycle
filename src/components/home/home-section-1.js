import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'src/components/material-ui/text-button';
import { IPHONE_ICON, CHECK_CIRCLE_ICON } from 'src/components/material-ui/icons';

function HomeSection1() {
  return (
    <section className="home-section-1">
      <div className="inner">
        <h1>On achète votre véhicule scrap</h1>
        <ul>
          <li>{CHECK_CIRCLE_ICON} Paiement cash le jour même</li>
          <li>{CHECK_CIRCLE_ICON} Aucun frais de remorquage</li>
          <li>{CHECK_CIRCLE_ICON} Meilleure offre sur le marché</li>
        </ul>
        <h5>Appelez nous pour recevoir une offre</h5>
        <Button className='home-sectin-1-cta'>
          {IPHONE_ICON} 514-433-4978
        </Button>
      </div>
    </section>
  );
}

export default HomeSection1;
