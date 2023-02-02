import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const AppBreadcrumbs = () => {

    const location = useLocation()
    ///contact/mail
    let crumbLink = ''
    const crumbPath = location.pathname.split('/')
                        .filter((path) => path !== '')
                        .map((crumb) => {
                            crumbLink += `/${crumb}`
                            return <Link to={crumbLink} key={crumb}>
                                {crumb}
                            </Link>
                        })
    console.log(crumbPath)
  return (
    <Breadcrumbs aria-label="breadcrumb">
        {crumbPath}
    </Breadcrumbs>
  )
}

export default AppBreadcrumbs