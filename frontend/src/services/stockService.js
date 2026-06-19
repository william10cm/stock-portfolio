import axios from "axios";

const API = "/api/stocks";

export const getStocks = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const getWatchlist = async () => {
  const response = await axios.get(`${API}/watchlist`);
  return response.data;
};

export const toggleWatchlist = async (id) => {
  const response = await axios.patch(`${API}/${id}/watchlist`);
  return response.data;
};