import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const api_key = '2660d7b7f6msh7aee25b2659fca6p1566b8jsn6947832176c7'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  // export const fetchFromAPI = async (url) =>{
  //  const {data} = await axios.get(`${BASE_URL}/${url}`,options)

  //  return data;
  // }
  
  export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error('Error fetching data from the API:', error);
      throw error; // Rethrow the error to be caught by the calling code
    }
  };