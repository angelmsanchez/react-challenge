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
}

export const starWarsService = new StarWarsService();
