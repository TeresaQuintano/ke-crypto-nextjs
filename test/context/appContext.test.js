import React from 'react';
import { create } from 'react-test-renderer';
import { AppProvider } from '../../context/AppContext';


describe('AppProvider component', () => {
  test('Matches the snapshot', () => {
    const sessionProvider = create(<AppProvider/>);
    expect(sessionProvider.toJSON()).toMatchSnapshot();
  });
});
