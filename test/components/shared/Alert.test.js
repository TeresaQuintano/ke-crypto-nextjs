import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Alert, Button } from '../../../components';
import ReactDOM from 'react-dom/client';
import { createContainer, createContainerDom } from '../../test-utils';

let container;

// it('Alert component', () => {
//   const alert = create(<Alert/>);
//   expect(alert.toJSON()).toMatchSnapshot();
// });
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
