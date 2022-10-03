import { useQuery } from "@tanstack/react-query";
import { topRatedApi } from "../../../apis/movieApi";

export default function useTopRatedMovie() {
  return useQuery(["topRatedMovie"], topRatedApi);
}
