import React from 'react'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function SearchBar() {
    return ( 
        <Paper
            component={'form'}
            onSubmit={() => { }}
            sx={{
                borderRadius: 15,
                border: '2px solid red',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search..'
                value=""
                onChange={() => { }}
                style={{border:"none"}}
            />

            <IconButton type='submit' sx={{color:"black" , padding:"10px"}}>
                <Search/>
            </IconButton>
        </Paper>
    )
}
