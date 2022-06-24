import React from 'react';
import { act } from 'react-dom/test-utils';
import { createContainer, createContainerDom } from '../../test-utils';
import { StockListItem } from '../../../components';

beforeEach(() => {
  createContainerDom()
});

it('StockListItem is rendered', () => {
  act(() => {
    createContainer(<StockListItem/>);
  });
  const component = document.getElementsByClassName('c-list__item-logo');

  expect(component).toBeTruthy()

});
