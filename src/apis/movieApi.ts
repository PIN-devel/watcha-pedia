import { getURL } from ".";

export const latestApi = () =>
  fetch(getURL("/movie/latest"))
    .then((res) => res.json())
    .then((json) => json);

export const upcomingApi = () =>
  fetch(getURL("/movie/upcoming"))
    .then((res) => res.json())
    .then((json) => json);

export const nowPlayingApi = () =>
  fetch(getURL("/movie/now_playing"))
    .then((res) => res.json())
    .then((json) => json);

export const popularApi = () =>
  fetch(getURL("/movie/popular"))
    .then((res) => res.json())
    .then((json) => json);

export const topRatedApi = () =>
  fetch(getURL("/movie/top_rated"))
    .then((res) => res.json())
    .then((json) => json);

export const detailApi = (movieId: string) =>
  fetch(getURL(`/movie/${movieId}`))
    .then((res) => res.json())
    .then((json) => json);

export const similarApi = (movieId: string) =>
  fetch(getURL(`/movie/${movieId}/similar`))
    .then((res) => res.json())
    .then((json) => json);

export const searchApi = (query: string) =>
  fetch(getURL(`/search/movie/`, `query=${query}`))
    .then((res) => res.json())
    .then((json) => json);
