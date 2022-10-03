import { useQuery } from "@tanstack/react-query";
import { nowPlayingApi } from "../../../apis/movieApi";

export default function useNowPlayingMovie() {
  return useQuery(["nowPlayingMovie"], nowPlayingApi);
}
