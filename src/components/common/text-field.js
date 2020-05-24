import React from 'react';
import InputField from '@material-ui/core/TextField';

function TextField({ field, ...props }) {
  return (
    <div className='text-field'>
      <InputField
        id='text-input'
        className='text-input'
        type="text"
        variant="outlined"
        {...field}
        {...props}
      />
    </div>
  );
}

export default TextField;
