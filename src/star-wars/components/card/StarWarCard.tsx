import React from 'react';

import { useNavigate } from 'react-router-dom';

import './StarWarCard.scss';
import { StarWarInterface } from '../../interfaces';

interface Props {
  starWar: StarWarInterface;
}

export function StarWarCard(props: Props): JSX.Element {
  const { starWar } = props;
  const navigate = useNavigate();

  const goToDetail = (): void => {
    navigate(`/star-wars/detail/${starWar.id}`);
  };

  return (
    <section className="star-war-card" onClick={goToDetail}>
      <div>{starWar.name}</div>
      <div>{starWar.hair_color}</div>
      <p className="title">Contacts</p>
      <p className="text">Add or change your contacts and links.</p>
    </section>
  );
}
