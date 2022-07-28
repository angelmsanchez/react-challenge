import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { warriorsService } from '../../services/warriors.service';
import { WarriorInterface } from '../../interfaces';
import { WarriorCard, WarriorFilter } from '../../components';
import { Spinner } from '../../../shared/components';

const PageContainer = styled.section`
  padding: 1.5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto 0;
  max-width: 768px;

  @media ${props => props.theme.screenXs} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${props => props.theme.screenMd} {
    max-width: 1024px;
    justify-content: space-between;
  }
`;

export default function WarriorListPage(): JSX.Element {
  const [originalWarriors, setOriginalWarriors] = useState<WarriorInterface[]>();
  const [filterWarriors, setFilterWarriors] = useState<WarriorInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getList = async () => {
    setIsLoading(true);
    try {
      const response = await warriorsService.getPeople();
      setIsLoading(false);
      setOriginalWarriors(response.results);
      setFilterWarriors(response.results);
    } catch {
      // TODO show alert o some feature about error
      setIsLoading(false);
    }
  };

  const handleFilterWarriors = (Warriors: WarriorInterface[]) => {
    setFilterWarriors(Warriors);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <PageContainer>
      <h4>Warriors List</h4>
      {!isLoading && (
        <>
          <WarriorFilter
            originalWarriors={originalWarriors}
            filterWarriors={filterWarriors}
            handleSetDefault={() => { if (originalWarriors) setFilterWarriors([...originalWarriors]); }}
            handleSortByTitle={setFilterWarriors}
            handleFilterColorHair={handleFilterWarriors}
          />
          <CardsContainer>
            {filterWarriors && filterWarriors.length > 0 && filterWarriors.map((warrior) => (
              <WarriorCard
                key={warrior.name}
                warrior={warrior}
              />
            ))}
          </CardsContainer>
        </>
      )}
      {isLoading && (<Spinner />)}
    </PageContainer>
  );
}
