import React from 'react';
import Radio from '@material-ui/core/Radio';
import { Field, Form } from 'formik';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';

export default function FlightEvent() {
  return (
    <Form className='flight-event'>
      <h2>Manage Flight</h2>
      <div className='flight-direction-radio-group'>
        <Field name='flightDirection' type='radio' value='departure' as={Radio} />
        <span>Departure</span>
        <Field name='flightDirection' type='radio' value='arrival' as={Radio} />
        <span>Arrival</span>
      </div>
      <Field name='title' label='Title' component={TextField} />
      <Field name='time' label='Departure Time' component={TextField} />
      <Field name='flightDuration' label='Flight Duration' component={TextField} />
      <Field name='airline' label='Airline' component={TextField} />
      <Field name='flightNumber' label='Flight Number' component={TextField} />
      <Field name='confirmationNumber' label='Confirmation #' component={TextField} />
      <Field name='terminal' label='Terminal' component={TextField} />
      <Field name='gate' label='Gate' component={TextField} />
      <Field name='price' label='Price' component={TextField} />
      <Field name='currency' label='Currency' component={TextField} />
      <div className='flight-direction-radio-group'>
        <div>Price Type</div>
        <Field name='priceType' type='radio' value='perPerson' as={Radio} />
        <span>Per Person</span>
        <Field name='priceType' type='radio' value='total' as={Radio} />
        <span>Total</span>
      </div>
      <Field name='notes' label='Notes' component={TextField} />
      <RoundedButton 
        className='add-trip-cta'
        text='Done'
        type='submit'
      />
    </Form>
  );
}
