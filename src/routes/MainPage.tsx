import React from "react";
import Layout from "../components/Layout";

import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularSection from "../features/movie/popular";
import TopRatedSection from "../features/movie/topRated";
import UpcomingSection from "../features/movie/upcoming";

const MainPage: React.FC = () => {
  return (
    <Layout>
      <LatestMovieSection />
      <NowPlayingSection />
      <PopularSection />
      <TopRatedSection />
      <UpcomingSection />
    </Layout>
  );
};

export default MainPage;
