import React from 'react'
import MacaronLove from '../components/MacaronLove'
import SetCards from '../components/SetCards'
import Holidays from '../components/Holidays'
import Sales from '../components/Sales'
import News from '../components/News'
import PopularSets from '../components/PopularSets'
import Cared from '../components/Cared'

const Home = () => {
  return (
    <>
      <MacaronLove/>
      <SetCards/>
      <Sales/>
      <Holidays/>
      <PopularSets/>
      <News/>
      <Cared/>
    </>
  )
}

export default Home
