import React from 'react';
import { act } from 'react-dom/test-utils';
import { createContainer, createContainerDom } from '../../test-utils';
import { StockList } from '../../../components';

beforeEach(() => {
  createContainerDom()
});

it('StockListItem is rendered', () => {
  act(() => {
    createContainer(<StockList/>);
  });
  const component = document.getElementsByClassName('c-stock-list');

  expect(component).toBeTruthy()

});
