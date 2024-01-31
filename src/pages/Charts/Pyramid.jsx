import React from 'react'
import { Header, PyramidChart } from '../../components'

const Pyramid = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category={"Chart"} title={"Pyramind Integration"}   />
    <div className='w-full'>
      <PyramidChart />
      </div>
      </div>
  )
}

export default Pyramid