import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
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
    
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx:"column", md:"row" } }} >
      <Box sx={{height: {sx:'auto',md:'92vh'}, borderRight: '1px solid #3d3d3d', px:{ sx: 0, md:2} }}>
        <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
         />

        <Typography className="copyright" varaint="body2" sx={{ mt:1.5,color:'#fff' }} >
          Copyright 2024 YouTub App
        </Typography>

      </Box>


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
        {selectedCategory}  <span style={{color:'#f31503'}} >videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
