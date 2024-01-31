import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries,AccumulationLegend,  AccumulationTooltip, AccumulationDataLabel , Legend }
from'@syncfusion/ej2-react-charts';
import {pieChartData, ecomPieChartData} from "../../data/dummy";
import { Browser } from '@syncfusion/ej2/base';
import { useStateContext } from '../../contexts/contextProvide';
const PieChart = () => {
  const {currentMode,currentColor} = useStateContext();
  return (
    <>

  <AccumulationChartComponent id='charts'
    background={currentMode==='Dark'?'#33373E':'#fff'}
    >
    <Inject services={[Legend,PieSeries,AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel ]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={ecomPieChartData} xName='x' yName='y' type='Pie'
        startAngle={Browser.isDevice ? 55 : 25}
        dataLabel={{
          visible: true,
          position: 'Outside',
          name: 'text',
          font: { fontWeight: '600',size:'22px' },
        }}
        radius={Browser.isDevice ? '70%' : '90%'}
        
        />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  
    
  </>
  )
}

export default PieChart;