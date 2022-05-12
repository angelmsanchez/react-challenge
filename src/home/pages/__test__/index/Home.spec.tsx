import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../../index/Home';

test('Home: renders component and get the title of page', () => {
  const title = 'Landing Page';
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );

  const element = screen.getByText(title);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(title);
});
