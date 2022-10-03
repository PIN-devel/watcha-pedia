import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../../apis/movieApi";

const useMovieSearch = (query: string) => {
  return useQuery(["searchMovie", query], () => searchApi(query), {
    enabled: Boolean(query),
  });
};

export default useMovieSearch;
