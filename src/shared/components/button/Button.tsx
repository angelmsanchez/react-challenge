import React from 'react';

import './Button.scss';

interface Props {
  children: JSX.Element;
  disabled?: boolean;
  handleClick: () => void;
}

export function Button(props: Props): JSX.Element {
  const {
    children,
    disabled = false,
    handleClick,
  } = props;

  return (
    <button onClick={handleClick} disabled={disabled}>
      <span className="button-custom">
        {children}
      </span>
    </button>
  );
}
