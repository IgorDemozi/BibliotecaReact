import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import styles from './Home.module.css'

const Home = () => {
   return (
      <div className={styles.mainContainer}>
         <Header />
         <Main />
      </div>
   )
}

export default Home