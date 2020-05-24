import React, { useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { ADD_ICON, SPACING, PENCIL_ICON } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';
import EventCategories from 'src/components/common/event-categories';
import RoundedButton from 'src/components/material-ui/rounded-button';
import { Formik, Field } from 'formik';
import Avatar from 'src/components/material-ui/avatar';
import { useAction } from 'src/store/hooks';
import * as actions from 'src/store/actions';

function EventDrawer({ day, event, categoryTabIndex }) {
  const setEventToDay = useAction(actions.itinerary.setEventToDay);
  const toggleEventDrawer = useAction(actions.ui.toggleEventDrawer);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    openDrawer(anchor, open);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // openDrawer(anchor, open);
  };

  const openDrawer = (anchor, open) => {
    setState({[anchor]: open });

    toggleEventDrawer(open);
  };

  const list = () => (
    <Formik 
      onSubmit={(values) => {
        console.log('values', values);
        setEventToDay({
          values,
          day,
          event: event.id,
        });
        setState({ ...state, right: false });
      }}
      initialValues={{
        flightDirection: event && event.flightDirection ? event.flightDirection : 'departure',
        title: event && event.title ? event.title : '',
        time: event && event.time ? event.time : '',
        flightDuration: event && event.flightDuration ? event.flightDuration : '',
        airline: event && event.airline ? event.airline : '',
        flightNumber: event && event.flightNumber ? event.flightNumber : '',
        confirmationNumber: event && event.confirmationNumber ? event.confirmationNumber : '',
        terminal: event && event.terminal ? event.terminal : '',
        gate: event && event.gate ? event.gate : '',
        price: event && event.price ? event.price : '',
        currency: event && event.currency ? event.currency : '',
        priceType: event && event.priceType ? event.priceType : 'perPerson',
        notes: event && event.notes ? event.notes : '',
        type: event.type,
      }}
    >
      {({ handleSubmit }) => (
        <EventCategories categoryTabIndex={categoryTabIndex} handleSubmit={handleSubmit} />
      )}
    </Formik>
  );

  return (
    <>
      <Avatar onClick={toggleDrawer('right', true)}>
        {PENCIL_ICON}
      </Avatar>
      <SwipeableDrawer 
        anchor='right'  
        open={state.right} 
        onClose={toggleDrawer('right', false)}
        onOpen={openDrawer}
      >
        {list('right')}
      </SwipeableDrawer>
    </>
  );
}

export default EventDrawer;
