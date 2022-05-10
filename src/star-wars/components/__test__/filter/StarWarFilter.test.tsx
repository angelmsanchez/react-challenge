import React from 'react';
import { render, screen } from '@testing-library/react';

import { StarWarFilter } from '../../filter/StarWarFilter';

test('StarWarFilter: renders component and test the label`s buttons', () => {
  render(
    <StarWarFilter
      handleSetDefault={() => { }}
      handleSortByTitle={() => { }}
      handleFilterColorHair={() => { }}
    />,
  );

  const element = screen.getAllByRole('button', { hidden: true });

  expect(element[0]).toHaveTextContent('Sort by name');
  expect(element[1]).toHaveTextContent('Set Default');
});

test('StarWarFilter: renders component and test the select component', () => {
  render(
    <StarWarFilter
      handleSetDefault={() => { }}
      handleSortByTitle={() => { }}
      handleFilterColorHair={() => { }}
    />,
  );

  const select = screen.getByRole('select-role', { hidden: true });

  expect(select).toHaveTextContent('Filter by hair color');
});
