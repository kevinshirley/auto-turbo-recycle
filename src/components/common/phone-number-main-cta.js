import React from 'react';
import Button from 'src/components/material-ui/text-button';
import { IPHONE_ICON } from 'src/components/material-ui/icons';

function PhoneNumberMainCta() {
  return (
    <>
      <a href='tel:5144334978'>
        <Button className='phone-number-main-cta'>
          {IPHONE_ICON} 514-433-4978
        </Button>
      </a>
    </>
  );
}

export default PhoneNumberMainCta;
