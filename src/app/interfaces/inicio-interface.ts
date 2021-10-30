export interface PopularMoviesObject {
  page: number;
  results?: (PM_Results_Entity)[] | null;
  total_pages: number;
  total_results: number;
}
export interface PM_Results_Entity {
  adult?: boolean | null;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  original_title?: string | null;
  overview: string;
  poster_path: string;
  release_date?: string | null;
  title?: string | null;
  video?: boolean | null;
  vote_average: number;
  vote_count: number;
  popularity: number;
  first_air_date?: string | null;
  name?: string | null;
  origin_country?: (string)[] | null;
  original_name?: string | null;
}

export interface RecentTrailersObject {
  page: number;
  results?: (RT_Results_Entity)[] | null;
  total_results: number;
  total_pages: number;
}
export interface RT_Results_Entity {
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

export interface RecentTrailersOfMovie {
  id: number;
  results?: (Trailers)[] | null;
}
export interface Trailers {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
