import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Videos from './Videos';
import { ChannelCard } from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Margin } from '@mui/icons-material';


export default function ChannelDetail() {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const id = useParams().id;



  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setchannelDetail(data.items[0]);
      });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data.items);
      });
  }
    , [id]);

  return (
    <Box minHeight="100vh" >
      <Box>
        <div style={{ background: "radial-gradient(circle, rgba(236,81,225,1) 0%, rgba(77,155,232,1) 100%)", zIndex: 10, height: 200 }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" background="transparent" />
      </Box>
      <Box display="flex" p={2} >
        <Box sx={{ mr: { sm: '100' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
