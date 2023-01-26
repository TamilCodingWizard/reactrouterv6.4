import React from 'react'
import { Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material';


const StyledLinkButton = styled(NavLink)({
    textDecoration:'none',
    color:'#fff',
    fontSize:20,
    "&.active": {
      background:'navy',
    },
    background:'#1876D1',
    paddingTop:10,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:10,
    borderRadius:5
})

const ContactLayout = () => {
  return (
    <>
      <Typography variant="h3">Contact</Typography>
      <Typography variant="body1" color='gray'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',my:5,gap:10}}>
        <StyledLinkButton to='mail'>Mail Us</StyledLinkButton>
        <StyledLinkButton to='phone'>Call Us</StyledLinkButton>
      </Box>

      <Outlet/>

    </>
  )
}

export default ContactLayout