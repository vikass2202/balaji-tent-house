import { Box, Link } from '@mui/material'
import Grid from '@mui/material/GridLegacy';
import React from 'react'
import "./Navbar.scss";

function Navbar() {
  return (
    <Box className="navbar row">
        <Grid container spacing={3} className="row">
            <Grid xs={3}>
               <a href="javascript:void(0)">
                    <img src="./images/logo.jpeg" alt="logo" className='logo_img'/>
                </a>
            </Grid>
            <Grid xs={9}>
                <ul className='linklist'>                    
                    <li><Link>About us</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Wedding Planner</Link></li>
                    <li><Link>Gallery</Link></li>
                    <li><Link>Contact us</Link></li>                    
                </ul>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Navbar