import React from 'react';
import { act } from 'react-dom/test-utils';
import { Navigation } from '../../../components';
import { createContainer, createContainerDom } from '../../test-utils';
import * as nextRouter from 'next/router';
import { useRouter } from 'next/router';

beforeEach(() => {
  createContainerDom()
});
it('Navigation is rendered', () => {
  const navItems = [
    {
      id: 1,
      text: 'Dashboard',
      pathname:'/dashboard',
      icon:'dashboard',
    },
    {
      id: 2,
      text: 'Refresh',
      pathname:'/refresh',
      icon:'refresh',
    },
    {
      id: 3,
      text: 'Card',
      pathname:'/card',
      icon:'card',
    },
    {
      id: 4,
      text: 'Settings',
      pathname:'/settings',
      icon:'settings',
    },
  ]

 jest.mock("next/router", () => ({
    useRouter() {
      return {
        id: 1,
        text: 'Dashboard',
        pathname:'/dashboard',
        icon:'dashboard',
      };
    },
  }));
  // const useRouter = jest.spyOn(require("next/router"), "useRouter");
  const navigation = document.getElementsByClassName('c-navigation');

  // expect(tree).toMatchSnapshot();
  const push =  jest.mock("next/router", () => ({
    useRouter() {
      return {
        id: 1,
        text: 'Dashboard',
        pathname:'/dashboard',
        icon:'dashboard',
      };
    },
  }));
  useRouter.mockImplementation(() => ({push}));
  expect(push).toHaveBeenCalledWith("/dashboard");
});

