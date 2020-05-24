import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightEvent from 'src/components/common/flight-event';
import ActivityEvent from 'src/components/common/activity-event';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ categoryTabIndex, handleSubmit }) {
  const [value, setValue] = React.useState(categoryTabIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='event-categories'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='tabs'
      >
        <Tab label="Flight" {...a11yProps(0)} />
        <Tab label="Activity" {...a11yProps(1)} />
        <Tab label="Accommodation" {...a11yProps(2)} />
        <Tab label="Transportation" {...a11yProps(3)} />
        <Tab label="Tour" {...a11yProps(4)} />
        <Tab label="Cruise" {...a11yProps(5)} />
        <Tab label="Info" {...a11yProps(6)} />
      </Tabs>
      <TabPanel className='event-categories-panel' value={value} index={0}>
        <FlightEvent handleSubmit={handleSubmit} />
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={1}>
        <ActivityEvent />
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel className='event-categories-panel' value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
