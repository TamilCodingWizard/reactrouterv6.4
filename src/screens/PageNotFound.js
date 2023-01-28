import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <Typography variant='h4'>Page Not Found</Typography>
        <Typography variant='body1' color='gray'>Go to <Link to='/'>Home Page</Link></Typography>
    </>
  )
}

export default PageNotFound