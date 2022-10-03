import { useQuery } from "@tanstack/react-query";
import { latestApi } from "../../../apis/tvApi";

export default function useLatestTv() {
  return useQuery(["latestTv"], latestApi);
}
