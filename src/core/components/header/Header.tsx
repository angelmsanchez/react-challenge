import React from 'react';

import { Link } from 'react-router-dom';

import './Header.scss';

export function Header(): JSX.Element {
  return (
    <header>
      <Link to="/star-wars">Star Wars Page</Link>
    </header>
  );
}
