import React from 'react';

import { Link } from 'react-router-dom';

import './WarriorCard.scss';
import { WarriorInterface } from '../../interfaces';

interface Props {
  warrior: WarriorInterface;
}

export function WarriorCard(props: Props): JSX.Element {
  const { warrior } = props;

  return (
    <Link className="warrior-card" to={`/warriors/detail/${warrior.id}`}>
      <h6 className="warrior-card__name">{warrior.name}</h6>
      <p><span>Hair Color:</span> {warrior.hair_color}</p>
      <p><span>Gender:</span> {warrior.gender}</p>
      <p><span>Height:</span> {warrior.height}</p>
      <div className="warrior-card__transition-container">Go To Detail</div>
    </Link>
  );
}
