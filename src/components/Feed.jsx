import React from 'react'
import { useState, useEffect } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setvideos(data.items)})
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: '90vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar
         selectedCategory={selectedCategory}
         setselectedCategory={setselectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 Vibe Tube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
        <Typography variant='h4'
          fontWeight="bold" mb="2px" sx={{ color: 'white' }}>
          {selectedCategory} <span style={{
            color: 'rgb(31, 168, 202)'
          }}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}



