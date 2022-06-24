import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '../test-utils';
import DashboardPage from '../../pages/dashboard'

describe('DashboardPage', () => {
  it('should render the heading', () => {
    render(<DashboardPage />);

    const heading = screen.getByText(
        /Hi Anakin/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
