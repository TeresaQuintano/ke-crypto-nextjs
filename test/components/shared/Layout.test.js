import React from 'react';
import { act } from 'react-dom/test-utils';
import { createContainer, createContainerDom } from '../../test-utils';
import Layout from '../../../components/shared/Layout';
import { PageMock } from '../../mocks/page.mock'

beforeEach(() => {
  createContainerDom()
});

it('Layout is rendered', () => {
  act(() => {
    createContainer(<Layout>{PageMock}</Layout>);
  });
  const layout = document.getElementById('layout');

  expect(layout.textContent).toBe('');

});

