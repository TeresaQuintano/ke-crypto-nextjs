import React from 'react';
import { Profile } from './Profile';
import { Alert } from './Alert';

export const Header = () => {
  return (

      <header className="c-header">
        <div className="c-header__profile">
          <Profile userName="Anakin"/>
        </div>
        <div className="c-header__alert">
          <Alert icon="bell"/>
        </div>
      </header>
  )
}

