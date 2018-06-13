export class TvShow {
  constructor(
    public id: number,
    public name: string,
    public summary: string,
    public language: string,
    public status: string,
    public officialSite: string,
    public rating: any,
    public genres: string[],
    public premiered: Date,
    public image: {
      medium: string;
      original: string;
    },
    public _embedded: {
      cast: Performer[];
      episodes: Episode[];
    }
  ) {}
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export interface Performer {
  person: {
    name: string;
    image: {
      medium: string;
    }
  };
  character: {
    name: string;
  };
}
