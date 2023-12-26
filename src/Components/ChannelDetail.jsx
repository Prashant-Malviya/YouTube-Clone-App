import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchFromAPI } from '../Utils/fetchFromAPI';

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
    <div>
    {id}
    </div>
  )
}

export default ChannelDetail
