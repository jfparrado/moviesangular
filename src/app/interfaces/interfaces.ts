export interface DetailedMovie {
  budget: number;
  id: number;
  popularity: number;
  revenue: number;
  runtime: number;
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  status: string;
  spoken_languages: string[];
  genres: string[];
  }
  export interface GeneralMovie {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    budget: number;
    genre_names: Array<string>;
  }
  export interface categories {
    id: number;
    name: string;
  }