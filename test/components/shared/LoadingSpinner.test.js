import React from 'react';
import { act } from 'react-dom/test-utils';
import { LoadingSpinner } from '../../../components';
import { createContainer, createContainerDom } from '../../test-utils';

beforeEach(() => {
  createContainerDom()
});

it('LoadingSpinner is rendered', () => {
  act(() => {
    createContainer(<LoadingSpinner/>);
  });
  const spinner = document.getElementsByClassName('c-spinner');

  expect(spinner).toBeTruthy();

});

