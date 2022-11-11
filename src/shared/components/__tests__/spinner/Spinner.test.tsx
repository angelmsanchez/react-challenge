import React from 'react';

import { render } from '@testing-library/react';

import { Spinner } from '../../spinner/Spinner';

test('Spinner: renders component and test the class', () => {
  const { container } = render(<Spinner />);

  expect(container.firstChild).toHaveClass('spinner-container');
});
