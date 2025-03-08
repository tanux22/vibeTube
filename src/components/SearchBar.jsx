import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'



export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('');
        }
    }

    return (
        <Paper
            component={'form'}
            onSubmit={handlesubmit}
            sx={{
                borderRadius: 15,
                border: '3px solid rgb(32, 153, 161)',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search..'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ border: "none" }}
            />

            <IconButton type='submit' sx={{ color: "black", padding: "10px" }}>
                <Search />
            </IconButton>
        </Paper>
    )
}
