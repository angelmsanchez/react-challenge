import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { WarriorCard } from '../../card/WarriorCard';
import { WarriorInterface } from '../../../interfaces';

test('WarriorCard: renders component and get the name of Warrior', () => {
  const Warrior = {
    name: 'Yoda',
  } as WarriorInterface;

  render(
    <BrowserRouter>
      <WarriorCard Warrior={Warrior} />
    </BrowserRouter>,
  );

  const element = screen.getByText(Warrior.name);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(Warrior.name);
  expect(element).toHaveClass('star-war-card__name');
});
