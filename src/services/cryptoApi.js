import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

// const cryptoApiHeaders = {
//   'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
//   'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
// };

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '7a2dd2d681msh828bb2a296eb193p1486cfjsnef7774c659cf',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),

    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    // }),

    // Note: To access this endpoint you need premium plan
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  }),
});

export const {
  useGetCryptosQuery
  // useGetCryptoDetailsQuery,
  // useGetExchangesQuery,
  // useGetCryptoHistoryQuery,
} = cryptoApi;