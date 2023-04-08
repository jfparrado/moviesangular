export interface DetailedMovie {
    budget: number;
    genres: Array<string>;
    homepage: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: Array<string>;
    status: string;
    vote_average: number;
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