import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../Utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed() {


  const [videos,setVideos] = useState([])

  const {searchTerm} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then( (data) => setVideos(data.items) )
    // .then(response => {
    //   // Handle successful response
    //   console.log(response.data);
    // })
    .catch(error => {
      // Handle error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Server responded with an error status:', error.response.status);
        console.log('Error data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error during request setup:', error.message);
      }
    });
    
  },[searchTerm])

  return (
    <Box
    p={2} sx={{overflow:'auto',height:'90vh',flex:2}}
    >
      <Typography 
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{
        color:'white'
      }}
       >
      Search Results For: <span style={{color:'#f31503'}} >{searchTerm}</span>
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed
