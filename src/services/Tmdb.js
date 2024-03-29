export const TMDB_URL = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API;

export const endpoints = {
  trending_tv: "/trending/tv/week",
  trending_movies: "/trending/movie/week",
  trending: "/trending/all/week",
  airing_today: "/tv/airing_today?language=en-US&sort_by=popularity.desc",
  popular: "/movie/popular",
  search: "/search/multi?language=en-US&sort_by=popularity.desc",
  anime: "/discover/tv?with_keywords=210024&sort_by=vote_average.desc",
};
