import React from 'react'
import { Link } from 'react-router-dom'
import MacaroniCakes from '../components/MacaroniCakes'
import Trymacaroni from '../components/Trymacaroni'

const DesertCatalog = () => {
  return (
    <div className='bg-[#F7F7F7]'>
      <MacaroniCakes/>
      <Trymacaroni/>
    </div>
  )
}

export default DesertCatalog

