import { WarriorInterface } from '../interfaces';

class WarriorsService {
  setIdByIndex(Warriors: WarriorInterface[]): WarriorInterface[] {
    return [
      ...Warriors.map((Warrior, index) => {
        return { ...Warrior, id: index + 1 };
      }),
    ];
  }
}

export const warriorsService = new WarriorsService();
