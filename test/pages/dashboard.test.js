import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import Dashboard from '../../pages/dashboard';
import { createContainer, createContainerDom } from '../test-utils';
import { AppProvider } from '../../context/AppContext';


beforeEach(() => {
  createContainerDom()
});
jest.mock('../../api/api')
it('Dashboard is rendered without amount', () => {

  const totalAmount = jest.fn()

  act(() => {
    createContainer(
        <AppProvider value={{totalAmount}}>
          <Dashboard/>
        </AppProvider>
    );
    // const component = document.getElementsByClassName('p-dashboard');


  })
  const componentTitle = screen.getByText(/your balance/i);
  expect(componentTitle).toBeInTheDocument();
})
