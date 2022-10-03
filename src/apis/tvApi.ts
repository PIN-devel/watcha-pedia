import { getURL } from ".";

export const latestApi = () =>
  fetch(getURL("/tv/latest"))
    .then((res) => res.json())
    .then((json) => json);

export const airingTodayApi = () =>
  fetch(getURL("/tv/airing_today"))
    .then((res) => res.json())
    .then((json) => json);

export const onTheAirApi = () =>
  fetch(getURL("/tv/on_the_air"))
    .then((res) => res.json())
    .then((json) => json);

export const popularApi = () =>
  fetch(getURL("/tv/popular"))
    .then((res) => res.json())
    .then((json) => json);

export const topRatedApi = () =>
  fetch(getURL("/tv/top_rated"))
    .then((res) => res.json())
    .then((json) => json);

export const detailApi = (tvId: string) =>
  fetch(getURL(`/tv/${tvId})`))
    .then((res) => res.json())
    .then((json) => json);

export const similarApi = (tvId: string) =>
  fetch(getURL(`/tv/${tvId}/similar`))
    .then((res) => res.json())
    .then((json) => json);

export const searchApi = (query: string) =>
  fetch(getURL(`/search/tv/?query=${query}`))
    .then((res) => res.json())
    .then((json) => json);
