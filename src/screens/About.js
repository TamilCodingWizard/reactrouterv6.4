import React, { useState } from 'react'
import { Button, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

const About = () => {
  const [user,setUser] = useState('test')

  if (!user) {
    return <Navigate to='/' replace={true}/>
  }

  return (
    <>
      <Typography variant="h3">About</Typography>
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
      <Button variant='contained' onClick={() => setUser(null)}>Logout</Button>
    </>
  )
}

export default About