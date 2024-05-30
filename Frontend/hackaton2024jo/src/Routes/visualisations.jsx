import { useState } from 'react'
import { Typography } from '@mui/material'

function Visualisations() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="h4" color={"#d6c278"}>
        Questions text analyse 
      </Typography>
      <img src='./Screenshot_50.png'></img>
      <br/>
      <br/>

      <Typography sx={{marginTop:"10%"}} color={"#d6c278"}>
        Questions text analyse 
      </Typography>
    </>
  )
}

export default Visualisations
