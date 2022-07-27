import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../shared/components';

const HomeContainer = styled.header`
  padding: 1.5rem;

  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 1rem;
  }

  button {
    margin-left: calc(50% - (220px / 2));
  }
`;

export default function Home(): JSX.Element {

  return (
    <HomeContainer>
      <h4>Landing Page</h4>
      <p>Welcome to Angel's challenge, this is a landing page!! </p>
      <p>If you want to go to the list of Warriors click on the following button</p>
      <Link to="/warriors">
        <Button>
          <>
            Go List Warriors
          </>
        </Button>
      </Link>
    </HomeContainer>
  );
}
