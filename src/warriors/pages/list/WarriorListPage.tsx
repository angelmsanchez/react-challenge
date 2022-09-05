import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from '@tanstack/react-query';

import './WarriorListPage.scss';
import { warriorsService } from '../../services';
import { WarriorInterface } from '../../interfaces';
import { WarriorCard, WarriorFilter } from '../../components';
import { Spinner } from '../../../shared/components';
import { PageResponseInterface } from '../../../shared/interfaces';

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
  const [filterWarriors, setFilterWarriors] = useState<WarriorInterface[]>([]);
  const [pageResponse, setPageResponse] = useState<PageResponseInterface<WarriorInterface>>();
  const [hasMorePages, setHasMorePages] = useState(true);
  const { isLoading, data, refetch } = useQuery(['people'], () =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getList(pageResponse?.next),
  );

  const getList = async (nextUrl?: string) => {
    const response = await warriorsService.getPeople(nextUrl);
    return response;
  };

  const handleFilterWarriors = (warriors: WarriorInterface[]) => {
    setFilterWarriors(warriors);
  };

  const handleNextWarriors = () => {
    if (pageResponse?.next) refetch();
    else setHasMorePages(false);
  };

  useEffect(() => {
    if (data) {
      setPageResponse(data);
      setFilterWarriors([
        ...filterWarriors,
        ...data.results,
      ]);
    }
  }, [data, isLoading]);

  return (
    <PageContainer>
      <h4>Warriors List</h4>
      {!isLoading && pageResponse && (
        <>
          <WarriorFilter
            originalWarriors={pageResponse.results}
            filterWarriors={filterWarriors}
            handleSetDefault={() => { if (pageResponse.results) setFilterWarriors([...pageResponse.results]); }}
            handleSortByTitle={setFilterWarriors}
            handleFilterColorHair={handleFilterWarriors}
          />
          <CardsContainer>
            <InfiniteScroll
              dataLength={filterWarriors.length}
              next={handleNextWarriors}
              hasMore={hasMorePages}
              loader={<div className="loader-infinite-scroll">Loading...</div>}
              style={{ width: '100%' }}
            >
              {filterWarriors && filterWarriors.length > 0 && filterWarriors.map((warrior) => (
                <WarriorCard
                  key={warrior.name}
                  warrior={warrior}
                />
              ))}
            </InfiniteScroll>
          </CardsContainer>
        </>
      )}
      {isLoading && (<Spinner />)}
    </PageContainer>
  );
}
