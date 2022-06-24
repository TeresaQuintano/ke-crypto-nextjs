import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen, Providers } from "./test-utils";
import App from '../pages/_app'


let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
describe('Home', () => {
  it('renders a heading', async() => {
    const getLayout = App.getLayout || ((page) => page);
    ReactDOM.createRoot(container).render(getLayout);


    await act(async () => {
      const button = await screen.findByText('Show all transactions')
      expect(button).toBeInTheDocument()
    })
  })
})
