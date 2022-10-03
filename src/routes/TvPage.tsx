import React from "react";
import Layout from "../components/Layout";
import AiringTodaySection from "../features/tv/airingToday";
import LatestTvSection from "../features/tv/latest";
import OntheAirSection from "../features/tv/onTheAir";
import PopularSection from "../features/tv/popular";
import TopRatedSection from "../features/tv/topRated";

const TvPage: React.FC = () => {
  return (
    <Layout>
      <LatestTvSection />
      <AiringTodaySection />
      <OntheAirSection />
      <PopularSection />
      <TopRatedSection />
    </Layout>
  );
};

export default TvPage;
