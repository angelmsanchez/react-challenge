import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { WarriorInterface } from '../../interfaces';
import { Button, Spinner } from '../../../shared/components';
import { warriorsService } from '../../services/warriors.service';

const PageContainer = styled.div`
  padding: 1.5rem;
`;

const DataContainer = styled.div`
  margin-top: 2rem;
`;

export default function WarriorDetailPage(): JSX.Element {
  const params = useParams();
  const [warrior, setWarrior] = useState<WarriorInterface>();

  const getDetail = async () => {
    try {
      const response = await warriorsService.getDetailPeople(params.idWarrior);
      setWarrior(response);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <PageContainer>
      <Link to="/warriors">
        <Button>
          <>
            Go List Warriors
          </>
        </Button>
      </Link>
      {warrior && (
        <DataContainer>
          <p><span>Name:</span> {warrior.name}</p>
          <p><span>Hair Color:</span> {warrior.hair_color}</p>
          <p><span>Eye Color:</span> {warrior.eye_color}</p>
          <p><span>Skin Color:</span> {warrior.skin_color}</p>
          <p><span>Gender:</span> {warrior.gender}</p>
          <p><span>Height:</span> {warrior.height}</p>
          <p><span>Mass:</span> {warrior.mass}</p>
          <p><span>Birth Year:</span> {warrior.birth_year}</p>
        </DataContainer>
      )}
      {!warrior && (<Spinner />)}
    </PageContainer>
  );
}
