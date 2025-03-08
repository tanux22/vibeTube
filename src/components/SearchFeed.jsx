import React from 'react'
import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

  const [videos, setvideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setvideos(data.items) })
  }, [])


  return (
    <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
      <Typography variant='h4'
        fontWeight="bold" mb="2px" sx={{ color: 'white' }}>
        Search results for: <span style={{
          color: 'rgb(31, 168, 202)'
        }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}



