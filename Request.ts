const Key = "ae61399464e01f4be5630174cdd92b0d";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
};

export default requests;