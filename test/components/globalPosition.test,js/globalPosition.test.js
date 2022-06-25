import React from 'react';
import { act } from 'react-dom/test-utils';
import { createContainer, createContainerDom } from '../../test-utils';
import { GlobalPosition } from '../../../components';

beforeEach(() => {
  createContainerDom()
});

it('GlobalPosition is rendered with title', () => {
  act(() => {
    createContainer(<GlobalPosition quantity="100"/>);
  });
  const component = document.getElementsByClassName('c-global-position');

  expect(component).toBeTruthy()

});
