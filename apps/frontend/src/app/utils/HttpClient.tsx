import axios from 'axios';

export const client = axios.create({
  baseURL: process.env['API_URL'] || 'http://localhost:3333/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});
