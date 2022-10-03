import styled from "@emotion/styled";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";
import { getYear } from "../../../utils";
import useTopRatedTv from "./useTopRatedTv";

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function TopRatedSection() {
  const { data, isLoading } = useTopRatedTv();
  return (
    <Base>
      <Title>최고 평점</Title>
      {isLoading || !data ? (
        <div>Loading</div>
      ) : (
        <Slider>
          {data.results.map((tv: any) => (
            <Card
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              posterPath={`${import.meta.env.VITE_API_IMAGE}${tv.poster_path}`}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
}
