import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '../../header/Header';

test('Header: renders component and test the class', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  const header = screen.getByRole('header', { hidden: true });

  expect(header).toHaveTextContent('Warriors Page');
});
