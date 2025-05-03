// Importando axios 

import axios from 'axios';

// criando uma cont que exporta a vase do axios
export const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
})