import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/ErrorPage";
import Movie from "./routes/MainPage";
import MovieDetail from "./routes/MovieDetail";
import TvDetail from "./routes/TvDetail";
import TvPage from "./routes/TvPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "movie/:id",
    element: <MovieDetail />,
    errorElement: <Error />,
  },
  {
    path: "tv",
    element: <TvPage />,
    errorElement: <Error />,
  },
  {
    path: "tv/:id",
    element: <TvDetail />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
