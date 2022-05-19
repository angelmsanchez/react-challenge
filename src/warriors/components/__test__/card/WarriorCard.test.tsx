import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { WarriorCard } from '../../card/WarriorCard';
import { WarriorInterface } from '../../../interfaces';

test('WarriorCard: renders component and get the name of Warrior', () => {
  const warrior = {
    name: 'Yoda',
  } as WarriorInterface;

  render(
    <BrowserRouter>
      <WarriorCard warrior={warrior} />
    </BrowserRouter>,
  );

  const element = screen.getByText(warrior.name);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(warrior.name);
  expect(element).toHaveClass('warrior-card__name');
});
