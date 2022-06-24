import React from 'react';
import { act } from 'react-dom/test-utils';
import { Button } from '../../../components';
import { createContainer, createContainerDom } from '../../test-utils';

beforeEach(() => {
  createContainerDom()
});
describe('Button', () => {

  it('Button is rendered without label', () => {
    act(() => {
      createContainer(<Button id='myButton'/>);
    });
    const buttonRendered = document.getElementById('myButton');

    expect(buttonRendered.textContent).toBe('');

  });
  it('Button is rendered with label', () => {
    act(() => {
      createContainer(<Button id='myButton' label='Show all transactions'/>);
    });
    const buttonRendered = document.getElementById('myButton');

    expect(buttonRendered.textContent).toBe('Show all transactions');

  });
})
