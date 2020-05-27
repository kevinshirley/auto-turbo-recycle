import React from 'react';
import Button from 'src/components/material-ui/text-button';
import { IPHONE_ICON } from 'src/components/material-ui/icons';
import cx from 'classnames';

function PhoneNumberMainCta({ reverted }) {
  const phoneNumberCta = cx(
    {
      'phone-number-main-cta--reverted': reverted,
    }, 
    'phone-number-main-cta',
  );

  return (
    <>
      <a href='tel:5144334978'>
        <Button className={phoneNumberCta}>
          {IPHONE_ICON} 514-900-6636
        </Button>
      </a>
    </>
  );
}

export default PhoneNumberMainCta;
