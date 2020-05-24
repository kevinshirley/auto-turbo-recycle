import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';

function EventPanel({ selectedEvent, isEditEventPanelOpened, closeEditEventPanel }) {
  return (
    <>
      {isEditEventPanelOpened && (
        <div className='container modal-container'>
          <div className='event-panel-wrapper'>
            <div className='header'>
              <div className='close'>
                <button onClick={closeEditEventPanel}>{CLOSE_ICON}</button>
              </div>
            </div>
            <div>
              <TextField label='Title' />
              <TextField label='Start time' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const actionsCreators = {
  closeEditEventPanel: actions.ui.closeEditEventPanel,
};

export default connect(
  storeConnector,
  actionsCreators,
)(EventPanel);
