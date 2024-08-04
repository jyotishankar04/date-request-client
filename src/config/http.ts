import axios from "axios";

export const http = axios.create({
  baseURL: "https://date-request-api.patrajyotishankarlearn.workers.dev/api",
});
