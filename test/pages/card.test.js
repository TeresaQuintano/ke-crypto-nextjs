import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import Card from '../../pages/dashboard';
import { createContainer, createContainerDom } from '../test-utils';
import { AppProvider } from '../../context/AppContext';
import Layout from '../../components/shared/Layout';


beforeEach(() => {
  createContainerDom()
});
jest.mock('../../api/api')
it('Card is rendered', () => {


  act(() => {
    createContainer(
        <AppProvider value={{totalAmount}}>
          <Layout>{Card}</Layout>;
        </AppProvider>
    );


  })
  const componentTitle = screen.getByText(/your balance/i);
  expect(componentTitle).toBeInTheDocument();
})
