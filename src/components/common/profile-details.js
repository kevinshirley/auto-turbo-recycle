import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { 
  CHAT_ICON,
  NOTIFICATIONS_ICON,
  PROFILE_ICON,
} from 'src/components/material-ui/icons';

function ProfileDetails({ name }) {
  return (
    <div className='profile-details'>
      <ul>
        <li>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              {CHAT_ICON}
            </Badge>
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              {NOTIFICATIONS_ICON}
            </Badge>
          </IconButton>
        </li>
        <li>
          <span>{name}</span>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {PROFILE_ICON}
          </IconButton>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDetails;
