import React from 'react';
import { createContainer, createContainerDom } from './test-utils';
import { act } from 'react-dom/test-utils';
import App from '../pages/_app'

beforeEach(() => {
  createContainerDom()
});
describe('App', () => {
  const getLayout = App.getLayout || ((page) => page);

  it('renders a button', () => {
    act(() => {
      createContainer(getLayout());
    });

    const button = document.getElementById('showMore');

    expect(button.textContent).toBe('showMore')
  })
})
