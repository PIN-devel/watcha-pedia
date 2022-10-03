import { useQuery } from "@tanstack/react-query";
import { popularApi } from "../../../apis/tvApi";

export default function usePopularTv() {
  return useQuery(["popularTv"], popularApi);
}
