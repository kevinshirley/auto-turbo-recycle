import React from 'react';
import Link from 'src/components/common/link';
import { LOGO } from 'src/components/common/images';
import SearchBar from 'src/components/common/search-bar';
import ProfileDetails from 'src/components/common/profile-details';
import { useRouter } from 'next/router';
import { ARROW_BACK_IOS_ICON, KEYBOARD_ARROW_RIGHT_ICON } from 'src/components/material-ui/icons';
import Button from 'src/components/material-ui/text-button';

function Navbar() {
  const router = useRouter();

  const MainNavbarContent = () => (
    <div className='inner'>
      <div className='logo'>
        <Link className='main-navigation-icon' href='/'>
          <img src={LOGO} alt='Trip Imagine Logo' />
        </Link>
      </div>
      <div className='search'>
        <SearchBar />
      </div>
      <div className='profile'>
        <ProfileDetails name={'John Doe'} />
      </div>
    </div>
  );

  const AddItineraryNavbarContent = () => (
    <div className='inner'>
      <div className='back-to-itineraries'>
        <Link href='/itineraries'>
          <Button>
            {ARROW_BACK_IOS_ICON}
            <span>Itineraries</span>
          </Button>
        </Link>
      </div>
      <div className='save-itinerary'>
        <Button>
          <span>Save</span>
          {KEYBOARD_ARROW_RIGHT_ICON}
        </Button>
      </div>
    </div>
  );

  return (
    <div className='navbar'>
      {router.pathname !== '/add-itinerary' ? (
        <MainNavbarContent />
      ) : (
        <AddItineraryNavbarContent />
      )}
    </div>
  );
};

export default Navbar;
