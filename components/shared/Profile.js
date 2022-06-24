import React from 'react';

export const Profile = (props) => {
  return (
      <div className="c-profile">
        {props.avatar ?
            <img className="c-profile__avatar"
                 src={props.avatar}
                 alt={`avatar-${props.userName}`}/>
            : ('')
        }
        <span className="c-profile__username">Hi {props.userName}</span>
      </div>
  )
}

