import React from 'react'
import {SplineAreaSeries, ChartComponent, SeriesCollectionDirective, Inject,  DateTime, Legend, SeriesDirective} from "@syncfusion/ej2-react-charts"

import {areaCustomSeries, areaPrimaryXAxis,areaPrimaryYAxis} from "../../data/dummy"
import { useStateContext } from '../../contexts/contextProvide'

const AreaChart = () => {
  const {currentMode} = useStateContext();
  return (
    <ChartComponent 
    id='area-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    background={currentMode==='Dark'?'#33373E':'#fff'}
    
    >
      <Inject services={[SplineAreaSeries,DateTime,Legend ]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,i)=>(
          <SeriesDirective key={i} {...item}   />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart