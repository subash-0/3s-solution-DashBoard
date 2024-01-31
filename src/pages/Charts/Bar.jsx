import React from 'react'
import { BarChart, Header } from '../../components'

const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category={"Chart"} title={"Inflation In Bar Plot"}   />
    <div className='w-full'>
      <BarChart />
      </div>
    </div>
  )
}

export default Bar