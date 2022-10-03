import styled from "@emotion/styled";
import Card from "../../../components/Card";
import { getYear } from "../../../utils";
import useLatestTv from "./useLatestTv";

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function LatestTvSection() {
  const { data, isLoading } = useLatestTv();
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>Loading</div>
      ) : (
        <Card
          linkUrl={`/tv/${data.id}`}
          title={data.name}
          posterPath={`${import.meta.env.VITE_API_IMAGE}${data.poster_path}`}
          voteAverage={data.vote_average}
          year={getYear(data.first_air_date)}
        />
      )}
    </Base>
  );
}
