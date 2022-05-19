import React, { useState, ChangeEvent } from 'react';

import './WarriorFilter.scss';
import { WarriorInterface } from '../../interfaces';
import { Button } from '../../../shared/components';

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

  const sorteableFunction = (Warriors: WarriorInterface[]): WarriorInterface[] => {
    return Warriors.sort((a, b) => isSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
  };

  const sortByName = (): void => {
    setIsSortAsc(!isSortAsc);
    if (filterWarriors && filterWarriors.length > 0) handleSortByTitle([...sorteableFunction(filterWarriors)]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    setHairColorSelected(newValue);
    let filterByHairColor = originalWarriors?.filter((Warrior) => Warrior.hair_color.includes(newValue));
    if (filterByHairColor && filterByHairColor.length > 0) filterByHairColor = [...sorteableFunction(filterByHairColor)];
    if (filterByHairColor && filterByHairColor.length > 0) handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <section className="warrior-filter">
      <Button
        handleClick={sortByName}
        disabled={!originalWarriors}
      >
        <>
          Sort by name
        {isSortAsc ? ' Ascendant' : ' Descendant'}
        </>
      </Button>
      <div role="select-role" className="warrior-filter__select">
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
      </div>
      <div className="warrior-filter__default-button">
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
      </div>
    </section>
  );
}
