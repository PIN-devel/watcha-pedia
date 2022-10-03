import { useQuery } from "@tanstack/react-query";
import { onTheAirApi } from "../../../apis/tvApi";

export default function useOnTheAirTv() {
  return useQuery(["onTheAirTv"], onTheAirApi);
}
