import { useQuery } from "@tanstack/react-query";
import { upcomingApi } from "../../../apis/movieApi";

export default function useUpcomingMovie() {
  return useQuery(["upcomingMovie"], upcomingApi);
}
