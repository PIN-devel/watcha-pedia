import { useQuery } from "@tanstack/react-query";
import { latestApi } from "../../../apis/movieApi";

export default function useLatestMovie() {
  return useQuery(["latestMovie"], latestApi);
}
