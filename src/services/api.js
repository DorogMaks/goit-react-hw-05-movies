import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76d635679cabf189c0749ed5946c0835';

export async function fetchTrending(controller) {
  const url = `${API_BASE_URL}/trending/movie/day`;
  const urlParams = {
    api_key: API_KEY,
  };

  const response = await axios.get(url, {
    params: urlParams,
    signal: controller.signal,
  });

  return response.data.results;
}

export async function fetchMovies(searchQuery) {
  const url = `${API_BASE_URL}/search/movie`;
  const urlParams = {
    api_key: API_KEY,
    query: searchQuery,
  };

  const response = await axios.get(url, {
    params: urlParams,
  });

  return response.data.results;
}

export async function fetchMovieDetails(id) {
  const url = `${API_BASE_URL}/movie/${id}`;
  const urlParams = {
    api_key: API_KEY,
  };

  const response = await axios.get(url, {
    params: urlParams,
  });

  return response.data;
}

export async function fetchCast(id) {
  const url = `${API_BASE_URL}/movie/${id}/credits`;
  const urlParams = {
    api_key: API_KEY,
  };

  const response = await axios.get(url, {
    params: urlParams,
  });

  return response.data.cast;
}

export async function fetchReviews(id) {
  const url = `${API_BASE_URL}/movie/${id}/reviews`;
  const urlParams = {
    api_key: API_KEY,
  };

  const response = await axios.get(url, {
    params: urlParams,
  });

  return response.data.results;
}
