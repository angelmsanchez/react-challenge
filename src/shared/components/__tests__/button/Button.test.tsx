import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '../../button/Button';

const handleClick = () => { };

test('Button: renders component and test the label and class', () => {
  const labelButton = 'Test Button';
  render(<Button handleClick={handleClick}>
    <>
      {labelButton}
    </>
  </Button>);
  const element = screen.getByText(labelButton);

  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(labelButton);
  expect(element).toHaveClass('button-custom');
});
