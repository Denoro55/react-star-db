class SwapiService {
    BASE_API_URL = 'https://swapi.dev/api';
    BASE_IMAGE_URL = 'https://starwars-visualguide.com/assets/img/';

    getResourse = async (url) => {
        const response = await fetch(`${this.BASE_API_URL}${url}`);
        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        return await response.json();
    };

    getPeopleAll = async () => {
        const response = await this.getResourse('/people');
        return response.results.map(this._transformPerson);
    };

    getPeopleById = async (id) => {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPerson(person);
    };

    getPlanetsAll = async () => {
        const response = await this.getResourse('/planets');
        return response.results.map(this._transformPlanet);
    };

    getPlanetById = async (id) => {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getStarshipsAll = async () => {
        const response = await this.getResourse('/starships');
        return response.results.map(this._transformStarship);
    };

    getStarshipById = async (id) => {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this.BASE_IMAGE_URL}/characters/${id}.jpg`;
    };

    getStarshipImage = ({id}) => {
        return `${this.BASE_IMAGE_URL}/starships/${id}.jpg`;
    };

    getPlanetImage = ({id}) => {
        return `${this.BASE_IMAGE_URL}/planets/${id}.jpg`;
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            length: starship.length,
            costInCredits: starship.cost_in_credits
        }
    }
}

export default SwapiService;
