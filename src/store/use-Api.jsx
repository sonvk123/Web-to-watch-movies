import { useEffect, useState } from "react";

export const useApi = (url, name, mode) => {
  const [data, setData] = useState([]);
  const [data_search, setData_search] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data_movies_randum, setdata_movies_randum] = useState({});
  const [urlImage, seturlImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/${url}`);

        if (response.ok) {
          const responseData = await response.json();
          const randomMovie =
            responseData.results[
              Math.floor(Math.random() * responseData.results.length - 1)
            ];
          setdata_movies_randum(randomMovie);
          if (mode === "random") {
            seturlImage(
              `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`
            );
          } else if (
            (mode === "all" && name === "fetchNetflixOriginals") ||
            name === "search"
          ) {
            for (const element of responseData.results) {
              if (element.poster_path  && element.id) {
                const image = element.poster_path ;
                const id = element.id;
                const data_movies = { ...element };
                setData((prevImages) => [
                  ...prevImages,
                  { image, id, data_movies },
                ]);
              }
            }
          } else if (mode === "all" && name !== "fetchNetflixOriginals") {
            for (const element of responseData.results) {
              if (element.backdrop_path && element.id) {
                const image = element.backdrop_path;
                const id = element.id;
                const data_movies = { ...element };
                setData((prevImages) => [
                  ...prevImages,
                  { image, id, data_movies },
                ]);
              }
            }
          }
          setData_search(responseData);
          setLoading(false);
        } else {
          setError("Error fetching data");
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, name, mode]);

  return {
    data,
    error,
    loading,
    data_movies_randum,
    urlImage,
    data_search,
  };
};
