import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';
import { Button } from '../../../shared/components';

export default function Home(): JSX.Element {

  return (
    <section className="home">
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
    </section>
  );
}
