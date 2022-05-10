import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StarWarsDetailPage from '../../detail/StarWarsDetailPage';

test('StarWarsDetailPage: renders component and get the button title', () => {
  const text = 'Go List Star Wars';

  render(
    <BrowserRouter>
      <StarWarsDetailPage />
    </BrowserRouter>,
  );

  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
