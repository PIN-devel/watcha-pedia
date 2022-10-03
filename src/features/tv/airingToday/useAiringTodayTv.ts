import { useQuery } from "@tanstack/react-query";
import { airingTodayApi } from "../../../apis/tvApi";

export default function useAiringTodayTv() {
  return useQuery(["airingTodayTv"], airingTodayApi);
}
