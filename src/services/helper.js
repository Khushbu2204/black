import axios from "axios";

export const BASE_URL = 'http://localhost:';

export const myAxios = axios.create({
    baseURL: BASE_URL,
});