import React, { useState, ChangeEvent } from 'react';

import styled from 'styled-components';

import { WarriorInterface } from '../../interfaces';
import { Button } from '../../../shared/components';

const WarriorContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media ${props => props.theme.screenMd} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 220px;
  letter-spacing: 2px;

  @media ${props => props.theme.screenMd} {
    margin: 0 0 0 1.5rem;
  }

  select {
    appearance: none;
    background-color: transparent;
    border-color: ${props => props.theme.main};
    border-width: 2px;
    border-radius: 6px;
    padding: 0.4rem;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }
`;

const ButtonContainer = styled.div`
  @media ${props => props.theme.screenMd} {
    margin-left: auto;
  }
`;

interface Props {
  originalWarriors?: WarriorInterface[];
  filterWarriors?: WarriorInterface[];
  handleSetDefault: () => void;
  handleSortByTitle: (sortWarriors: WarriorInterface[]) => void;
  handleFilterColorHair: (sortWarriors: WarriorInterface[]) => void;
}

export function WarriorFilter(props: Props): JSX.Element {
  const {
    originalWarriors,
    filterWarriors,
    handleSetDefault,
    handleSortByTitle,
    handleFilterColorHair,
  } = props;

  const [isSortAsc, setIsSortAsc] = useState(true);
  const [hairColorSelected, setHairColorSelected] = useState('');

  const sortableFunction = (Warriors: WarriorInterface[]): WarriorInterface[] => {
    return Warriors.sort((a, b) => isSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
  };

  const sortByName = (): void => {
    setIsSortAsc(!isSortAsc);
    if (filterWarriors && filterWarriors.length > 0) handleSortByTitle([...sortableFunction(filterWarriors)]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    setHairColorSelected(newValue);
    let filterByHairColor = originalWarriors?.filter((Warrior) => Warrior.hair_color.includes(newValue));
    if (filterByHairColor && filterByHairColor.length > 0) filterByHairColor = [...sortableFunction(filterByHairColor)];
    if (filterByHairColor && filterByHairColor.length > 0) handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <WarriorContainer>
      <Button
        handleClick={sortByName}
        disabled={!originalWarriors}
      >
        <>
          Sort by name
          {isSortAsc ? ' Ascendant' : ' Descendant'}
        </>
      </Button>
      <SelectContainer role="select-role" className="warrior-filter__select">
        <label>Filter by hair color</label>
        <select value={hairColorSelected} onChange={changeSelect}>
          <option value=""> - </option>
          <option value="auburn">Auburn</option>
          <option value="blond">Blond</option>
          <option value="brown">Brown</option>
          <option value="grey">Grey</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="n/a">n/a</option>
          <option value="none">None</option>
        </select>
      </SelectContainer>
      <ButtonContainer>
        <Button
          handleClick={() => {
            setIsSortAsc(true);
            setHairColorSelected('');
            handleSetDefault();
          }}
        >
          <>
            Set Default
          </>
        </Button>
      </ButtonContainer>
    </WarriorContainer>
  );
}
