import React, { createContext } from 'react';

// Tạo một context mới
const ApiContext = createContext();

// Tạo một provider cho context
const ApiProvider = ({ children }) => {
  const API_KEY = "6500f56c320884f1c02f02de944113e2";

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  return (
    <ApiContext.Provider value={{ API_KEY, requests }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };