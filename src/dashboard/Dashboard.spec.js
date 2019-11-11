import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
  });

  test('gate defaults to unlocked and open', () => {
      const {getByText} = render(<Dashboard />);
      expect(getByText(/open/i));
      expect(getByText(/unlocked/i));
  })

  test('Dashboard renders the controls and display', () => {
      expect(render(<Dashboard />)).toMatchSnapshot();
  })