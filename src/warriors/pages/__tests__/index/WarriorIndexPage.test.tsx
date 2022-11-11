import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import WarriorIndexPage from '../../list/WarriorListPage';

test('WarriorsIndexPage: renders component and get the title of the page', () => {
  const text = 'Warriors List';
  render(
    <BrowserRouter>
      <WarriorIndexPage />
    </BrowserRouter>,
  );

  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
