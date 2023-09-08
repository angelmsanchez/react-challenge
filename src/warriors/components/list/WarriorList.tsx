import React from 'react';

import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { WarriorInterface } from '../../interfaces';
import { WarriorCard } from '../card/WarriorCard';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto 0;
  max-width: 768px;

  @media ${(props) => props.theme.screenXs} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${(props) => props.theme.screenMd} {
    max-width: 1024px;
    justify-content: space-between;
  }
`;

interface Props {
  warriors: WarriorInterface[];
  hasMorePages: boolean;
  onNextWarriors: () => void;
}

export function WarriorList(props: Props): JSX.Element {
  const { warriors, hasMorePages, onNextWarriors } = props;
  console.log('WarriorList', warriors);

  return (
    <CardsContainer>
      <InfiniteScroll
        dataLength={warriors.length}
        next={onNextWarriors}
        hasMore={hasMorePages}
        loader={<div className='loader-infinite-scroll'>Loading...</div>}
        style={{ width: '100%' }}
      >
        {warriors &&
          warriors.length > 0 &&
          warriors.map((warrior, index) => <WarriorCard key={`${index}-${warrior.name}`} warrior={warrior} />)}
      </InfiniteScroll>
    </CardsContainer>
  );
}
