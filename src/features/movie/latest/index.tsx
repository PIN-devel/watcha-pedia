import styled from "@emotion/styled";
import Card from "../../../components/Card";
import { getYear } from "../../../utils";
import useLatestMovie from "./useLatestMovie";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function LatestMovieSection() {
  const { data, isLoading } = useLatestMovie();
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`/movie/${data.id}`}
          title={data.title}
          posterPath={`${import.meta.env.VITE_API_IMAGE}${data.poster_path}`}
          voteAverage={data.vote_average}
          year={getYear(data.release_date)}
        />
      )}
    </Base>
  );
}
