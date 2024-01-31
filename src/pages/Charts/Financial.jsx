import React from 'react'
import { FinanceChart, Header } from '../../components'

const Financial = () => {
  return ( 
  <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
  <Header category={"Chart"} title={"Inflation In Financial Chart"}   />
  <div className='w-full'>

      <FinanceChart />
      </div>
    </div>
  )
}

export default Financial