import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import {ApiProvider} from "./store/data_movies.jsx";
function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
