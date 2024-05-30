import { Card, Container, Typography } from '@mui/material'
import { useState } from 'react'
import CardProfile from '../Components/CardProfile/CardProfile';

const profiles = [
    {
        name: 'Nassim YAZI',
        sport: 'Tennis de table',
        country: 'URSS',
    },
    {
        name: 'Edison MASSENA',
        sport: 'Basketball',
        country: 'USA',
    },
    {
        name: 'Oussama CHERIF',
        sport: 'Taekwondo',
        country: 'Tunisie',
    },
    {
        name: 'Richard MULAMBA',
        sport: 'Football',
        country: 'Espagne',
    },
    {
        name: 'Etienne VACHER',
        sport: 'Rugby a sept',
        country: 'Nouvelle-Zélande',
    },
    {
        name: 'Jean-Pierre LI',
        sport: 'Natation',
        country: 'USA',
    },
    {
        name: 'Paul LUCIANI',
        sport: 'Tennis',
        country: 'Norvège',
    },


];

function About() {

    return (
        <Container sx={{ display: 'flex', flexWrap: 'wrap'}}>
            {profiles.map((p) => (
                <CardProfile name={p.name} sport={p.sport} country={p.country} />
            ))}
        </Container>
    )
}

export default About
