import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Topography, CardMedia, CardContent} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'


export const VideoCard = ({video: {id: {videoId},snippet}}) => {
    console.log(videoId, snippet)
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                title={snippet?.title || demoVideoTitle}
                sx={{height:180 ,width:350}}
            />
        </Link>
    </Card>
  )
}