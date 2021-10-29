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
