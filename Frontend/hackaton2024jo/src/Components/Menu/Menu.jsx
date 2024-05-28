import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import './Menu.css'

function Menu() {
  // const [count, setCount] = useState(0)

  return (
    <AppBar position="absolute">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Hackathon JO 2024
        </Typography>
        <Box sx>
          <Button sx={{ color: '#fff', marginLeft: 10 }} href='/home'>
            Accueil
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3 }} href='/predictions'>
            Prédictions
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3 }} href='/visualisations'>
            Visualisations
          </Button>
          <Button sx={{ color: '#fff', marginLeft: 3 }} href='/questions'>
            Questions
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
