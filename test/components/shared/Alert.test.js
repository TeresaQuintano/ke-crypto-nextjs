import React from 'react';
import { act } from 'react-dom/test-utils';
import { Alert } from '../../../components';
import { createContainer, createContainerDom } from '../../test-utils';

beforeEach(() => {
  createContainerDom()
});
describe('Alert', () => {

  it('Alert is rendered without amount', () => {
    act(() => {
      createContainer(<Alert id="myAlert"/>);
    });
    const alertRendered = document.getElementById('myAlert');

    expect(alertRendered.textContent).toBe('');

  });

  it('Alert is rendered with amount', () => {
    act(() => {
      createContainer(<Alert id="myAlert" amount='5'/>);
    });
    const alertRendered = document.getElementById('myAlert');

    expect(alertRendered.textContent).toBe('5 You have 5 notifications');

  });
})
