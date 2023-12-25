import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './Components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}} className='text-white'>
      <Navbar /> 
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
