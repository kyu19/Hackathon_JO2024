import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import axios from 'axios';
import './Menu.css'

function Menu() {
  // const [count, setCount] = useState(0)

  return (
    <AppBar position="absolute" sx={{ bgcolor: "#d6c278" }}>
      <Toolbar variant="dense">
        <Typography variant="h6" fontWeight={'bold'} color="inherit" component="div">
          Hackathon JO 2024
        </Typography>
        <Box sx>
          <Button sx={{ color: '#fff', marginLeft: 10, fontWeight:'bold'}} href='/home'>
            Accueil
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3, fontWeight:'bold' }} href='/predictions'>
            Prédictions
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3, fontWeight:'bold' }} href='/visualisations'>
            Visualisation
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3, fontWeight:'bold' }} href='/about'>
            A propos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}


export default Menu
