import React from 'react'
import {Grid,Card,Typography,Tabs,Box,Tab} from '@mui/material';
import shop from '../../../images/shop.png'

const TabPanel=(props) =>{
  const {childern,value,index}=props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value==index && (
          <Box>{childern}</Box>
        )
      }

    </div>
  )
}



const LoginReg = () => {
  return (
    <>
    <Grid container sx={{height:'90vh'}} >
      <Grid item lg={7} sm={5} sx={{
        backgroundImage:`url(${shop})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}>
      </Grid>
    
      <Grid item lg={5} sm={7} >
      <Card sx={{width:'100%',height:'100%'}}>
      <Box>
        <Box sx={{borderBottom: 1 ,borderColor:'divider'}}>
        <Tabs textColor='secondary' indicatorColor='secondary'>
          <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
          <Tab label='Registeration' sx={{textTransform:'none',fontWeight:'bold'}} ></Tab>
        </Tabs>

        <TabPanel value={0} index={0}>User Login</TabPanel>


        </Box>
      </Box>
      </Card>
      </Grid>



    </Grid>
    </>
  )
}

export default LoginReg