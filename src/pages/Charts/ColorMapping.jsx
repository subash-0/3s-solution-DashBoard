import React from 'react'
import { ColorMappingChart, Header } from '../../components'

const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category={"Chart"} title={"World Color Mapping"}   />
    <div className='w-full'>
      <ColorMappingChart />
    </div>
    </div>
  )
}

export default ColorMapping