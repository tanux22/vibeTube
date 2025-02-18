import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const selectedCategory = "New"

export default function SideBar({selectedCategory,setselectedCategory}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}>
      {categories.map((Category) => (
        <button
          className='category-btn'
          onClick={()=>{
            setselectedCategory(Category.name)
          }}
          style={{
            background: Category.name === selectedCategory ? 'rgb(31, 168, 202) ' : 'initial',
            color: 'white', 
            marginRight:10
          }}

        >
          <span style={{
            color:Category.name===selectedCategory?'white':'rgb(31, 168, 202)', 
            paddingRight:"10px"
          }}>{Category.icon}</span>
          <span style={{
            opacity:Category.name===selectedCategory?1:0.8
          }}>{Category.name}</span>
        </button>
      ))}

    </Stack>
  )
}
