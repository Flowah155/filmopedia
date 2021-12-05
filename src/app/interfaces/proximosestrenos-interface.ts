export interface ProximosestrenosObject {
    page: number;
    results?: (ResultsEntity)[] | null;
    dates: Dates;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids?: (number | null)[] | null;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path?: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }
  export interface Dates {
    maximum: string;
    minimum: string;
  }
  
  export interface ProximosAscObject {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_results: number;
    total_pages: number;
  }
  export interface ResultsEntityAsc {
    poster_path?: null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids?: (number)[] | null;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path?: null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }
  
  export interface ProximosDesObject {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntityDes {
    adult: boolean;
    backdrop_path?: string | null;
    genre_ids?: (number | null)[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  