import React from 'react'
import Header from '../Header/Header'
import Main from './Main/Main'
import { MainContainer } from '../styles'

const Home = () => {
   return (
      <MainContainer>
         <Header />
         <Main />
      </MainContainer>
   )
}

export default Home