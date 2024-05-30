import { Typography } from '@mui/material'
import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  return (
    <Typography variant="h4" color={"#d6c278"}>
        A propos de nous :
    </Typography>
  )
}

export default About
