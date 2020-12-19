import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../environment';

export const apiFetchAvailableRestaurants = async (keyword: string, date: string) => {
  const result: AxiosResponse<any> = await axios(`${API_URL}/restaurants/available?keyword=${keyword}&date=${date}`);
  return [result.data];
};