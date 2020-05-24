import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/add-itinerary';
import Link from 'src/components/common/link';
import { 
  HOME_ICON, 
  PEOPLE_ICON, 
  BAR_CHART_ICON,
  TODAY_CALENDAR_ICON,
  CLOCK_ICON,
  NOTIFICATIONS_ICON,
  SETTINGS_ICON,
  LOGOUT_ICON,
} from 'src/components/material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router';
import Button from 'src/components/material-ui/text-button';
import DayToDayTabs from 'src/components/common/day-to-day-tabs.js';

function MainMenu({ setDayToDayTab, addDayToDay, dayToDayList, dayToDayTab }) {
  const router = useRouter();
  const tab = dayToDayTab;

  const MainMenuContent = () => (
    <div className="main-menu">
      <div className='inner'>
        <div className='main-navigation'>
          <Link className='main-navigation-icon' href="/">
            {HOME_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/profiles">
            {PEOPLE_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/itineraries">
            {TODAY_CALENDAR_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/reports">
            {BAR_CHART_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/search-history">
            {CLOCK_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/notifications">
            {NOTIFICATIONS_ICON}
          </Link>
          <Link className='main-navigation-icon' href="/settings">
            {SETTINGS_ICON}
          </Link>
        </div>
        <div className='logout'>
          <Link className='main-navigation-icon' href="/logout">
            {LOGOUT_ICON}
          </Link>
        </div>
      </div>
    </div>
  );

  const AddItineraryMenuContent = ({ setDayToDayTab }) => (
    <div className="main-menu add-itinerary-menu">
      <div className='inner'>
        <DayToDayTabs setDayToDayTab={setDayToDayTab} list={dayToDayList} tab={tab} />
        <Button onClick={addDayToDay}>
          <span>+ New Day</span>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {router.pathname !== '/add-itinerary' ? (
        <MainMenuContent />
      ) : (
        <AddItineraryMenuContent setDayToDayTab={setDayToDayTab} />
      )}
    </>
  );
}

export default connect(
  storeConnector,
  {
    setDayToDayTab: actions.ui.setDayToDayTab,
    addDayToDay: actions.itinerary.addDayToDay,
  },
)(MainMenu);
