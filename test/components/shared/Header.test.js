import React from 'react';
import { act } from 'react-dom/test-utils';
import { Header } from '../../../components';
import { createContainer, createContainerDom } from '../../test-utils';

beforeEach(() => {
  createContainerDom()
});
describe('Header', () => {

  it('Header is rendered with profile component', () => {
    act(() => {
      createContainer(<Header/>);
    });
    const profile = document.getElementsByClassName('c-profile');

    expect(profile).toBeTruthy();

  });

  it('Header is rendered with alert component', () => {
    act(() => {
      createContainer(<Header/>);
    });
    const alert = document.getElementsByClassName('c-c-button--only-icon');

    expect(alert).toBeTruthy();

  });
})
