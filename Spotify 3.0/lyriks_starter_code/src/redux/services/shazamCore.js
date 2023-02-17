import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/charts/world",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "b320f4c8fbmsha36134acddb5a52p13b1b0jsnaec5b3194103"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
