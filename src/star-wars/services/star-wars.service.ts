import { StarWarInterface } from '../interfaces';
import { PageResponseInterface } from '../../shared/interfaces';

class StarWarsService {
  url = 'https://swapi.dev/api/';

  async getPeople(): Promise<PageResponseInterface<StarWarInterface>> {
    const response = await fetch(`${this.url}people/`, {
      method: 'GET',
    });
    return response.json();
  }

  async getDetailPeople(idStarWar?: string): Promise<StarWarInterface> {
    const response = await fetch(`${this.url}people/${idStarWar}`, {
      method: 'GET',
    });
    return response.json();
  }

  setIdByIndex(starWars: StarWarInterface[]): StarWarInterface[] {
    return [...starWars.map((starWar, index) => { return { ...starWar, id: index + 1 }; })];
  }

}

export const starWarsService = new StarWarsService();
