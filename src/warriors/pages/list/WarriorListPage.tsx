import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import './WarriorListPage.scss';
import { WarriorInterface } from '../../interfaces';
import { WarriorFilter, WarriorList } from '../../components';
import { Spinner } from '../../../shared/components';
import { PageResponseInterface } from '../../../shared/interfaces';
import { useGet } from '../../../shared/services';
import { warriorsService } from '../../services';

const PageContainer = styled.section`
  padding: 1.5rem;
`;

export default function WarriorListPage(): JSX.Element {
  const [originalWarriors, setOriginalWarriors] = useState<WarriorInterface[]>([]);
  const [filterWarriors, setFilterWarriors] = useState<WarriorInterface[]>([]);
  const [pageResponse, setPageResponse] = useState<PageResponseInterface<WarriorInterface>>();
  const [hasMorePages, setHasMorePages] = useState(true);
  const [url, setUrl] = useState('people');
  const { data } = useGet<PageResponseInterface<WarriorInterface>>(url);
  console.log('WarriorListPage');

  const handleNextWarriors = () => {
    if (pageResponse?.next) setUrl(pageResponse.next.replace('https://swapi.dev/api/', ''));
    else setHasMorePages(false);
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        console.log('setTimeout', data);
        setPageResponse(data);
        setOriginalWarriors([...originalWarriors, ...data.results]);
        setFilterWarriors([...filterWarriors, ...warriorsService.setIdByIndex(data.results)]);
      }, 1000);
    }
  }, [data]);

  return (
    <PageContainer>
      <h4>Warriors List</h4>
      <p>Numero original warriors: {originalWarriors.length}</p>
      <p>Numero filtrados warriors: {filterWarriors.length}</p>
      <br />
      {pageResponse && (
        <>
          <WarriorFilter
            originalWarriors={originalWarriors}
            filterWarriors={filterWarriors}
            handleSetDefault={() => setFilterWarriors(originalWarriors)}
            handleSortByTitle={setFilterWarriors}
            handleFilterColorHair={setFilterWarriors}
          />
          <WarriorList warriors={filterWarriors} hasMorePages={hasMorePages} onNextWarriors={handleNextWarriors} />
        </>
      )}
      {!pageResponse && <Spinner />}
    </PageContainer>
  );
}
