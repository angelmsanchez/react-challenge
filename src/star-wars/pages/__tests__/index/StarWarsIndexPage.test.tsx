import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StarWarsIndexPage from '../../index/StarWarsIndexPage';

test('StarWarsIndexPage: renders component and get the title of the page', () => {
  const text = 'Star Wars List';
  render(
    <BrowserRouter>
      <StarWarsIndexPage />
    </BrowserRouter>,
  );

  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
