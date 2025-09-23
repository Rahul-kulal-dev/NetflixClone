export const API_END_POINTS="http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
  }
};

export const Now_Playing_Movie_API="https://api.themoviedb.org/3/movie/now_playing";
export const Popular_movie_API="https://api.themoviedb.org/3/movie/popular";
export const Top_rated_Movie_API="https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie_API="https://api.themoviedb.org/3/movie/upcoming";

export const Search_Movie_API="https://api.themoviedb.org/3/search/movie?query=";