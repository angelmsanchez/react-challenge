import React from 'react';

import { Link } from 'react-router-dom';

import './Header.scss';
import head from '../../../assets/images/head.png';

export function Header(): JSX.Element {
  return (
    <header role="header">
      <Link to="/">
        <img src={head} alt="Go to home" />
      </Link>
      <Link to="/warriors">Warriors Page</Link>
    </header>
  );
}
