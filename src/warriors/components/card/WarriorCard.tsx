import React from 'react';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import './WarriorCard.scss';
import { WarriorInterface } from '../../interfaces';

const LinkStyleComponent = styled.div`
  padding: 1rem;
  margin: 1rem 0.5rem;
  width: 100%;
  max-width: 280px;
  min-width: 200px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 2px 10px rgba(9, 114, 208, 0.24);
    border-color: rgba(9, 114, 208, 0.24);
    cursor: url('../../../assets/images/espada-laser.png'), auto;
  }
`;

interface Props {
  warrior: WarriorInterface;
}

export function WarriorCard(props: Props): JSX.Element {
  const { warrior } = props;

  return (
    <Link className="warrior-card" to={`/warriors/detail/${warrior.id}`}>
      <LinkStyleComponent>
        <h6 className="warrior-card__name">{warrior.name}</h6>
        <p><span>Hair Color:</span> {warrior.hair_color}</p>
        <p><span>Gender:</span> {warrior.gender}</p>
        <p><span>Height:</span> {warrior.height}</p>
        <div className="warrior-card__transition-container">Go To Detail</div>
      </LinkStyleComponent>
    </Link>
  );
}
