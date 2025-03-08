import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack, Avatar } from '@mui/material'
import { CheckCircle, ThumbUp, RemoveRedEye } from '@mui/icons-material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos';


export default function VideoDetail() {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [channelLogo, setChannelLogo] = useState('');
  const [subscribers, setSubscribers] = useState('');

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        const videoData = data.items[0];
        setVideoDetail(videoData);

        // Fetch channel details (logo & subscribers)
        if (videoData?.snippet?.channelId) {
          fetchFromAPI(`channels?part=snippet,statistics&id=${videoData.snippet.channelId}`)
            .then((channelData) => {
              const channelInfo = channelData.items[0];
              setChannelLogo(channelInfo?.snippet?.thumbnails?.default?.url);
              setSubscribers(channelInfo?.statistics?.subscriberCount);
            })
            .catch((error) => console.error("Error fetching channel details:", error));
        }
      })
      .catch((error) => console.error(error));


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching related videos:", error));
  }, [id]);

  if (!VideoDetail) return <Typography>Loading...</Typography>;

  const { snippet, statistics } = VideoDetail || {};
  const { title, channelId, channelTitle } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  return (
    <Box>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Box flex={1}>

          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              width="100%"
              height="75vh"
              controls
            />
            <Typography variant="h5" sx={{ color: "rgb(31, 168, 202)", p: 2, pb: 1, fontWeight: 600 }}>
              {title}
            </Typography>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ color: 'rgb(219, 141, 200)' }} py={1} px={2}>

              {/* Channel Info (Logo + Name + Subscribers) */}
              <Stack direction="row" alignItems="center">
                {channelLogo && (
                  <Avatar src={channelLogo} sx={{ width: 40, height: 40, mr: 1 }} />
                )}
                <Stack>
                  <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle1" color='rgb(219, 141, 200)' sx={{ fontWeight: 600 }}>
                      {channelTitle}
                    </Typography>
                    <CheckCircle sx={{ fontSize: '14px', color: 'rgb(219, 141, 200)', ml: '5px' }} />
                  </Link>
                  <Typography variant="caption" sx={{ color: "grey" }}>
                    {new Intl.NumberFormat().format(subscribers)} subscribers
                  </Typography>
                </Stack>
              </Stack>

              {/* View & Like Count with Icons */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <RemoveRedEye sx={{ fontSize: 18, color: "white" }} />
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                    {new Intl.NumberFormat().format(viewCount)}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <ThumbUp sx={{ fontSize: 18, color: "white" }} />
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                    {new Intl.NumberFormat().format(likeCount)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ xs: 5, md: 0 }}
          sx={{
            maxHeight: '100vh',  
            overflowY: 'auto',    
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>

    </Box>
  );
}
