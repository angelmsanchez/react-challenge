import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { StarWarCard } from '../../card/StarWarCard';
import { StarWarInterface } from '../../../interfaces';

test('StarWarCard: renders component and get the name of StarWar', () => {
  const starWar = {
    name: 'Yoda',
  } as StarWarInterface;

  render(
    <BrowserRouter>
      <StarWarCard starWar={starWar} />
    </BrowserRouter>,
  );

  const element = screen.getByText(starWar.name);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(starWar.name);
  expect(element).toHaveClass('star-war-card__name');
});
