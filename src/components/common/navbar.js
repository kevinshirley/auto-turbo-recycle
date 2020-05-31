import React from 'react';
import { AUTO_TURBO_LOGO } from 'src/components/common/images';
import MobileMenu from 'src/components/common/mobile-menu';
import LanguageSelection from 'src/components/common/language-selection';
import Button from 'src/components/material-ui/text-button';
import useI18n from 'src/hooks/use-i18n';

function Navbar() {
  const i18n = useI18n();

  const MainNavbarContent = () => (
    <div className='inner'>
      <div className='logo'>
        <img src={AUTO_TURBO_LOGO} alt={i18n.t('alt.autoTurboLogo')} />
      </div>
      <div className='menu-links'>
        <a href={i18n.t('navigation.howItWorksIdHash')}>
          <Button className='navbar-menu-link'>
            {i18n.t('navigation.link1')}
          </Button>
        </a>
        <a href={i18n.t('navigation.sellMyCarIdHash')}>
          <Button className='navbar-menu-link'>
            {i18n.t('navigation.link2')}
          </Button>
        </a>
        <a href={i18n.t('navigation.contactIdHash')}>
          <Button className='navbar-menu-link'>
            {i18n.t('navigation.link3')}
          </Button>
        </a>
        <LanguageSelection />
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
