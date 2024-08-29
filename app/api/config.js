export const BASE_URL = "https://backend.pindie.my-kinozal.ru/api";

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/auth/login`,
  users: `${BASE_URL}/users`,
  getMe: `${BASE_URL}/me`,
  checkExists: `${BASE_URL}/users/check-exist`
};
