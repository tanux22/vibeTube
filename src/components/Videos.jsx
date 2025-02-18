import React from 'react'
import {Stack,Box} from '@mui/material'
import { VideoCard } from './VideoCard'
import { ChannelCard } from './ChannelCard'

export default function Videos({videos}){
  console.log(videos)
  return (
    <Stack direrction='row' justifyContent="start" gap={2} alignItems="start" flexWrap='wrap'>
      {videos.map((video)=>(
        <Box key={video.id.videoId}>
          {video.id.videoId && <VideoCard video={video}/>}
          {/* {video.id.channelId && <ChannelCard channelDetail={video}/>} */}
        </Box>
      ))}
    </Stack>
  )
}

