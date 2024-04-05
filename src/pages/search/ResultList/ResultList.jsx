import React, { useState, useEffect } from "react";

import { useApi } from "../../../store/use-Api";

import styles from "./ResultList.module.css";
const ResultList = (props) => {
  const API_KEY = "6500f56c320884f1c02f02de944113e2";
  const url = `search/movie?api_key=${API_KEY}&language='en'&query=${props.name}`;

  const { data, error, loading } = useApi(url, "search", "all");
  console.log(data);

  const click = (value, data_movies, id) => {
    props.onChange(value, data_movies, id);
  };

  return (
    <div>
      {error === null && loading === false && (
        <div className={styles.ResultList}>
          <h1>Search Result</h1>
          <div className={styles.image}>
            {data.map((value, index) => (
              <img
                onClick={() => click(value, value.data_movies, value.id)}
                key={index}
                src={`https://image.tmdb.org/t/p/original/${value.image}`}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
      {error !== null && <h1>error</h1>}
    </div>
  );
};
export default ResultList;
