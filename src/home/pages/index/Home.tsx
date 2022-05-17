import React from 'react';

import { useNavigate } from 'react-router-dom';

import './Home.scss';
import { Button } from '../../../shared/components';

export default function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="home">
      <h4>Landing Page</h4>
      <p>Welcome to Angel's challenge, this is a landing page!! </p>
      <p>If you want to go to the list of Warriors click on the following button</p>
      <Button
        handleClick={() => {
          navigate('/warriors');
        }}
      >
        <>
          Go List Warriors
        </>
      </Button>
    </section>
  );
}
