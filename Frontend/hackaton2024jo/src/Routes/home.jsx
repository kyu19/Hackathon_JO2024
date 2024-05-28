import { Typography } from '@mui/material'
import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <Typography color={"#d6c278"}>
        Accueil
    </Typography>
  )
}

export default Home
