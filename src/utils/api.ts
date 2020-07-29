import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const ApiService = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  timeout: 10000,
  headers: HEADERS,
  validateStatus: function (status: number) {
    return status >= 200 && status < 300; // default
  },
});
