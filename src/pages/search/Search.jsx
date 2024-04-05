import React, { Fragment, useState } from "react";

import NavBar from "../browse/Navbar/NavBar";
import SearchForm from "../search/SearchForm/SearchForm";
import ResultList from "../search/ResultList/ResultList";
import MovieDetail from "./ResultList/MovieDetail";
import styles from "./Search.module.css";

import { useTrailer } from "../../store/data_movies_trailer";

const Search = () => {
  const [isShowImg, setIsShowImg] = useState(false);
  const [nameSearch, setNameSearch] = useState("");

  const [data_movies, setData_movies] = useState(null);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [Id, setId] = useState(null);

  const [overview, setOverview] = useState(null);

  const khi_nhan_nut = (btn, name) => {
    if (btn === "SEARCH") {
      if (nameSearch === name) {
      } else if (nameSearch !== name) {
        setNameSearch(name);
        setIsShowImg(true);
        setIsShowVideo(false)
      }
    }
    if (btn === "RESET") {
      setIsShowImg(false);
    }
  };

  const khi_nhan_vao_anh = (value, data_movies, id) => {
    if (Id === null) {
      // Click vào ảnh lần đầu
      setData_movies(value);
      setId(id);
      setOverview(data_movies.overview);
      setIsShowVideo(true);
    } else if (Id === id) {
      // Click lại vào ảnh của cùng một bộ phim
      setIsShowVideo(!isShowVideo); // Ẩn/hiển thị thông tin bộ phim
    } else if (Id !== id) {
      // Click vào ảnh một bộ phim khác
      setData_movies(value);
      setId(id);
      setOverview(data_movies.overview);
      setIsShowVideo(true);
    }
  };


  const { key_Trailer, Trailer } = useTrailer(Id);

  return (
    <Fragment>
      <div className={styles.Search}>
        <NavBar />
        <SearchForm onChange={khi_nhan_nut} />
        {isShowImg && (
          <ResultList
            key={nameSearch}
            name={nameSearch}
            onChange={khi_nhan_vao_anh}
          />
        )}
      </div>
        {isShowVideo && (
        <MovieDetail
          value={data_movies}
          overview={overview}
          id={key_Trailer}
          Trailer={Trailer}
        />
      )}
    </Fragment>
  );
};

export default Search;
