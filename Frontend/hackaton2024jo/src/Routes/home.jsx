import { Typography } from '@mui/material'
import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ height: '55vh', display: 'flex', alignItems: 'end', marginLeft:'3vw' }}>
        <Typography variant="h3" color='black' sx={{background:'white', padding:'10px 25px' , borderRadius:'35px'}}>
          Bienvenue aux JO Paris 2024
        </Typography>
      </div>
    </>
  )
}

export default Home
