import React from 'react'
import {Stack,Box} from '@mui/material'
import { VideoCard } from './VideoCard'
import { ChannelCard } from './ChannelCard';

export default function Videos({ videos, direction }) {

  if (!videos?.length) return "loading.."
  // console.log(videos)
  const channels = videos.filter(item => item.id.channelId);
  const videoItems = videos.filter(item => item.id.videoId);
  // console.log(channels,"hi",videoItems);

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2} overflowY='auto'>
      {channels.map((item, idx) => (
        <Box key={`channel-${idx}`}>
          <ChannelCard channelDetail={item}/>
        </Box>
      ))}
      {videoItems.map((item, idx) => (
        <Box key={`video-${idx}`}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
}



