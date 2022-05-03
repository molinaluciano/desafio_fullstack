const { default: axios } = require("axios");

export const backendApiInstance = axios.create({
    baseURL: "http://localhost:8080",
    responseType: "json"
});

