import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, BarSeries } from '@syncfusion/ej2-react-charts';
import {barChartData, barCustomSeries,barPrimaryXAxis,barPrimaryYAxis} from "../../data/dummy"
import { useStateContext } from '../../contexts/contextProvide';
const BarChart = () => {
    const {currentMode} = useStateContext();
  return (
    <ChartComponent id='charts' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}}
    background={currentMode==='Dark'?'#33373E':'#fff'}
    >
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      {barCustomSeries.map((item,i)=>(
          <SeriesDirective key={i} {...item}  xName='x' yName='y' type='Bar' columnFacet='Cylinder' />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default BarChart