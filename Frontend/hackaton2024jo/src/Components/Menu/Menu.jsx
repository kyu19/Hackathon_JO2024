import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button, Drawer, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import axios from 'axios';
import './Menu.css'

function Menu() {
  // const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 850px)')

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  

  return (
    <>
      <AppBar position="absolute" sx={{ bgcolor: "#d6c278" }}>
        <Toolbar variant="dense" sx={isMobile ? { justifyContent: 'space-between' } : {}} >
          <Typography variant="h6" fontWeight={'bold'} color="inherit" component="div">
            Hackathon JO 2024
          </Typography>
          {isMobile ? (
            <div>
              <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250, display: 'flex', flexDirection:'column' }}  role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
                  <Button variant='outlined' sx={{ color: '#fff', fontWeight: 'bold' }} href='/home'>
                    Accueil
                  </Button>
                  <Button variant='outlined' sx={{ color: '#fff', fontWeight: 'bold' }} href='/predictions'>
                    Prédictions
                  </Button>
                  <Button variant='outlined' sx={{ color: '#fff', fontWeight: 'bold' }} href='/visualisations'>
                    Visualisations
                  </Button>
                  <Button variant='outlined' sx={{ color: '#fff', fontWeight: 'bold' }} href='/about'>
                    A propos de nous
                  </Button>
                </Box>
              </Drawer>
            </div>
          ) : (
            <Box>
              <Button sx={{ color: '#fff', marginLeft: 10, fontWeight: 'bold' }} href='/home'>
                Accueil
              </Button>
              <Button sx={{ color: '#fff', marginLeft: 3, fontWeight: 'bold' }} href='/predictions'>
                Prédictions
              </Button>
              <Button sx={{ color: '#fff', marginLeft: 3, fontWeight: 'bold' }} href='/visualisations'>
                Visualisations
              </Button>
              <Button sx={{ color: '#fff', marginLeft: 3, fontWeight: 'bold' }} href='/about'>
                A propos de nous
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>

  )
}


export default Menu
