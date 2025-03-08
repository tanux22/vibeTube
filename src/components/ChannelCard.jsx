import React from 'react'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

export const ChannelCard = ({channelDetail, marginTop, background}) => {
  // console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: { xs: '356px', md: '320px' },
        // height: '326px',
        margin: 'auto',
        marginTop: marginTop,
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ width: 270, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", textAlign: 'center', backgroundColor: '#0d0d0d', backgroundColor: background }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ width: 180, height: 180, mt: 2, borderRadius: '50%', border: "1px solid rgb(110, 168, 216)", marginBottom: 2}} />
          <Typography variant='h6' color='rgb(219, 141, 200)' marginTop={1}>
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{ fontSize: '14px', color: 'rgb(219, 141, 200)', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'rgb(110, 168, 216)' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
