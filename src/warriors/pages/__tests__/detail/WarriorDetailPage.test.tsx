import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import WarriorsDetailPage from '../../detail/WarriorDetailPage';

test('WarriorsDetailPage: renders component and get the button title', () => {
  const text = 'Go List Warriors';

  render(
    <BrowserRouter>
      <WarriorsDetailPage />
    </BrowserRouter>,
  );

  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
