import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import head from '../../../assets/images/head.png';
import backgroundHeader from './../../../assets/images/background-header.jpg';

const HeaderContainer = styled.header`
  height: 150px;
  width: 100%;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 75%;
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  a {
    color: white;
    margin-left: 2rem;
  }
`;

export function Header(): JSX.Element {
  return (
    <HeaderContainer role="header">
      <Link to="/">
        <img src={head} alt="Go to home" />
      </Link>
      <Link to="/warriors">Warriors Page</Link>
    </HeaderContainer>
  );
}
