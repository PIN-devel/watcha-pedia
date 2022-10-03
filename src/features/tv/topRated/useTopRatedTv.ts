import { useQuery } from "@tanstack/react-query";
import { topRatedApi } from "../../../apis/tvApi";

export default function useTopRatedTv() {
  return useQuery(["topRatedTv"], topRatedApi);
}
