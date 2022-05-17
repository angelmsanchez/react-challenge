import React from 'react';
import { render, screen } from '@testing-library/react';

import { WarriorFilter } from '../../filter/WarriorFilter';

test('WarriorFilter: renders component and test the label`s buttons', () => {
  render(
    <WarriorFilter
      handleSetDefault={() => { }}
      handleSortByTitle={() => { }}
      handleFilterColorHair={() => { }}
    />,
  );

  const element = screen.getAllByRole('button', { hidden: true });

  expect(element[0]).toHaveTextContent('Sort by name');
  expect(element[1]).toHaveTextContent('Set Default');
});

test('WarriorFilter: renders component and test the select component', () => {
  render(
    <WarriorFilter
      handleSetDefault={() => { }}
      handleSortByTitle={() => { }}
      handleFilterColorHair={() => { }}
    />,
  );

  const select = screen.getByRole('select-role', { hidden: true });

  expect(select).toHaveTextContent('Filter by hair color');
});
