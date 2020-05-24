import React from 'react';
import Radio from '@material-ui/core/Radio';
import { Field, Form } from 'formik';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';

export default function ActivityEvent() {
  return (
    <Form className='flight-event'>
      <h2>Manage Activity</h2>
      <Field name='title' label='Title' component={TextField} />
      <Field name='time' label='Activity Start Time' component={TextField} />
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
