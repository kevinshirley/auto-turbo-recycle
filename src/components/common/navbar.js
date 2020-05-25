import React from 'react';
import { AUTO_TURBO_LOGO } from 'src/components/common/images';
import { ARROW_BACK_IOS_ICON, KEYBOARD_ARROW_RIGHT_ICON } from 'src/components/material-ui/icons';
import Button from 'src/components/material-ui/text-button';

function Navbar() {
  const MainNavbarContent = () => (
    <div className='inner'>
      <div className='logo'>
        <img src={AUTO_TURBO_LOGO} alt='Trip Imagine Logo' />
      </div>
      <div className='menu-links'>
        <Button className='navbar-menu-link'>
          Comment ca marche?
        </Button>
        <Button className='navbar-menu-link'>
          Scrap mon auto
        </Button>
        <Button className='navbar-menu-link'>
          F.A.Q.
        </Button>
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
