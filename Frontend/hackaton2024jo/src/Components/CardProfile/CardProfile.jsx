import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react'

function CardProfile(props) {

  return (
    <>
      <Card sx={{ width:200 , margin:"5vh auto", marginRight:4, textAlign:'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/public/profile.jpg"
          alt="user"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sport préféré : {props.sport}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pays soutenu : {props.country}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default CardProfile
