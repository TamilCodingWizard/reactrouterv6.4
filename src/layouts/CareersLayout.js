import { Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Careers from '../screens/Careers'
import { Container } from '@mui/material';

const CareersLayout = () => {
  return (
    <>
        <Typography variant='body1'>We are continuously learning and developing, always looking to improve the standards of what we provide. Join us.</Typography>
        <Container sx={{p:5}}>
          <Outlet/>
        </Container>
    </>
  )
}

export default CareersLayout