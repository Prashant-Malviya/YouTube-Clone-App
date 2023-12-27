import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchFromAPI } from '../Utils/fetchFromAPI';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import { Videos } from '.';

function ChannelDetail() {
  const [channelDetail,setChannelDetail] = useState(null);
  const {id} = useParams();
  const [videos,setVideos] = useState([])

  console.log(channelDetail, videos)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])


  return (
    <Box minHeight="92vh">
      <Box>

      <div style={{
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        zIndex:10,
        height:'300px'
      }}
       />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />

      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos} />
      </Box>
    
    </Box>
  )
}

export default ChannelDetail
