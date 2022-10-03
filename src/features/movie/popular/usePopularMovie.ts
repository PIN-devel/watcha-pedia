import { useQuery } from "@tanstack/react-query";
import { popularApi } from "../../../apis/movieApi";

export default function usePopularMovie() {
  return useQuery(["popularMovie"], popularApi);
}
