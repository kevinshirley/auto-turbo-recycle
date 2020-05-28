import React from 'react';
import { AUTO_TURBO_LOGO } from 'src/components/common/images';
import MobileMenu from 'src/components/common/mobile-menu';
import Button from 'src/components/material-ui/text-button';

function Navbar() {
  const MainNavbarContent = () => (
    <div className='inner'>
      <div className='logo'>
        <img src={AUTO_TURBO_LOGO} alt='Auto Turbo Logo' />
      </div>
      <div className='menu-links'>
        <a href='#fonctionnement'>
          <Button className='navbar-menu-link'>
            Fonctionnement
          </Button>
        </a>
        <a href='#vehicule-scrap'>
          <Button className='navbar-menu-link'>
            Véhicule Scrap
          </Button>
        </a>
        <a href='#contact'>
          <Button className='navbar-menu-link'>
            Contact
          </Button>
        </a>
      </div>
      <div className='mobile-menu-button'>
        <MobileMenu />
      </div>
    </div>
  );

  return (
    <div className='navbar'>
      <MainNavbarContent />
    </div>
  );
};

export default Navbar;
