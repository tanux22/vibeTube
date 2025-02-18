import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import VIBE from '../utils/VIBE.png'
import SearchBar from './SearchBar'


export default function Navbar() {
    return (
        <Stack 
            direction={'row'}
            alignItems={'center'} 
            p={2}
            position={'sticky'}
            justifyContent={'space-between'}
            top={0}
            sx={{  
                background: "rgba(0, 0, 0, 0.7)",  // Semi-transparent black
                backdropFilter: "blur(10px)",  // Blur effect
                top: 0, 
                zIndex: 1000 
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={VIBE} alt="logo" height={50} />
            </Link>

            <SearchBar />
        </Stack>
    )
}
