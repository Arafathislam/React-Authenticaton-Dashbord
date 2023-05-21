import React from 'react'
import {Button,CssBaseline,Grid,Typography} from '@mui/material';
const Dashbord = () => {
  return (
    <>
    <CssBaseline/>
    <Grid>
    <Grid item sm={4} sx={{backgroundColor:'gray' ,p:5,color:'white'}}>

    <Typography variant='h5'>Email:islamarafath315@gmail.com</Typography>
    <Typography variant='h6'>Name:Arafath</Typography>
    <Button>Logout</Button>

    </Grid>

    <Grid item sm={8}>
    </Grid>

    </Grid>
    </>
  )
}

export default Dashbord