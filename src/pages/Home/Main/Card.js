import React from 'react'
import CardMUI from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardLink } from './Card.styles.js'

const Card = ({ txt, rota, alt, imagem }) => {

   return (
      <CardLink to={rota}>
         <CardMUI
            sx={{
               width: 250,
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-around',
               alignItems: 'center',
               backgroundColor: '#e6e6e6',
               '&:hover': {
                  backgroundColor: "#FFC501"
               }
            }}>
               
            <CardContent
               component='div'
               sx={{
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}>

               <CardMedia
                  component='img'
                  sx={{ width: '46px' }}
                  image={imagem}
                  alt={alt}
               />
            </CardContent>

            <CardContent
               component='div'
               id='div-do-paragrafo'
               sx={{
                  backgroundColor: 'white',
                  width: 240
               }}>
               <p>{txt}</p>
            </CardContent>
         </CardMUI>
      </CardLink>
   )
}

export default Card