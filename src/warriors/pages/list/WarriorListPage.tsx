import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import './WarriorListPage.scss';
import { WarriorInterface } from '../../interfaces';
import { WarriorCard, WarriorFilter } from '../../components';
import { Spinner } from '../../../shared/components';
import { PageResponseInterface } from '../../../shared/interfaces';
import { useGet } from '../../../shared/services';
import { warriorsService } from '../../services';

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
  const [url, setUrl] = useState('people');
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useGet<PageResponseInterface<WarriorInterface>>(url);

  const handleFilterWarriors = (warriors: WarriorInterface[]) => {
    setFilterWarriors(warriors);
  };

  const handleNextWarriors = () => {
    if (pageResponse?.next) setUrl(pageResponse.next.replace('https://swapi.dev/api/', ''));
    else setHasMorePages(false);
  };

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setPageResponse(data);
      setFilterWarriors([
        ...filterWarriors,
        ...warriorsService.setIdByIndex(data.results),
      ]);
    }
  }, [data]);

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
