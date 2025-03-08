import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Box} from '@mui/material'
import { Typography } from '@mui/material';
import { Check, CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'


export const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippet)
  return (
    <Card sx={{ width:{md:300, xs:"100%"}, borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          title={snippet?.title || demoVideoTitle}
          sx={{height: "180px", width: "100%", objectFit: "contain", backgroundColor: "#000" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="rgb(219, 141, 200)">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="rgb(110, 152, 216)">
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle color="rgb(110, 152, 216)" sx={{fontSize:12, ml:1}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}