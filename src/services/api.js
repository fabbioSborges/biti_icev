const axios = require("axios");

const api = axios.create({
  baseURL: "https://biticev-api.herokuapp.com/api/proposal/submit",
});

export default api;
