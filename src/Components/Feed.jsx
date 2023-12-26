import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx:"column", md:"row" } }} >
      <Box sx={{height: {sx:'auto',md:'92vh'}, borderRight: '1px solid #3d3d3d', px:{ sx: 0, md:2} }} className='h-[92vh]'>
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
        New  <span style={{color:'#f31503'}} >videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>

    </Stack>
  )
}

export default Feed
