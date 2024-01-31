import React from 'react'
import { ChartComponent, SeriesCollectionDirective, Inject, Tooltip, DateTime, Legend, LineSeries ,SeriesDirective} from "@syncfusion/ej2-react-charts"

import {lineCustomSeries, LinePrimaryXAxis,LinePrimaryYAxis} from "../../data/dummy"
import { useStateContext } from '../../contexts/contextProvide'

const LineChart = () => {
  const {currentMode} = useStateContext();
  return (
    <ChartComponent 
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode==='Dark'?'#33373E':'#fff'}
    
    >
      <Inject services={[LineSeries,DateTime,Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,i)=>(
          <SeriesDirective key={i} {...item}   />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart