// hiển thị danh sách phim trong từng loại phim

import React, { useContext, useEffect, useState } from "react";

import { useApi } from "../../../store/use-Api";

import styles from "./MovieListItems.module.css";
const MovieListItems = (props) => {
  // lấy data từ list phim
  const { data } = useApi(props.data, props.name, props.mode);

  // khi click vào ảnh
  const click = (value, data_movies, fetch) => {
    props.onChange(value, fetch, data_movies.overview, value.id);
  };

  return (
    <div className={styles.MovieListItems}>
      {data.map((value, index) => (
        <img
          onClick={() => click(value, value.data_movies, props.fetch)}
          key={index}
          src={`https://image.tmdb.org/t/p/original/${value.image}`}
          alt=""
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default MovieListItems;
