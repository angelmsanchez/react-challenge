import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '../../router/Router';

test('Router: renders component and test the class', () => {
  const text = 'Loading...';
  render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
  );

  const router = screen.getByText(text);

  expect(router).toHaveTextContent(text);
  expect(router).toBeInTheDocument();
  expect(router).toHaveTextContent(text);
});
