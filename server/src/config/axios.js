const axios = require('axios');

const customAxios = axios.create({
  baseURL: 'https://dummyjson.com/', // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add other common headers here
  },
});

module.exports = customAxios;