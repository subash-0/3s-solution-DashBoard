import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries,DateTime, Inject, Logarithmic, Crosshair, Zoom, Tooltip} from "@syncfusion/ej2-react-charts"
import {financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis} from "../../data/dummy"
import { useStateContext } from '../../contexts/contextProvide';
const date1 = new Date('2017,1,1');
function filterValue(value){
    if(value.x>=date1){
        return value.x , value.high, value.low;
    }

}
const returnValue = financialChartData.filter(filterValue);
const FinanceChart = () => {
    const {currentMode }= useStateContext();
  return (
    <ChartComponent 
        id='chart'
    primaryXAxis={FinancialPrimaryXAxis} 
    primaryYAxis={FinancialPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true,shared:true}}
    crosshair={{enable:true, lineType:"Vertical"}}
    background={currentMode==='Dark'?'#33373E':'#fff'}
    >
        <Inject  services={[HiloSeries,DateTime,Logarithmic,Crosshair,Zoom, Tooltip]} />
        <SeriesCollectionDirective>
            <SeriesDirective  
            dataSource={returnValue}
            xName='x'
            yName='low'
            name='Apple Inc'
            type='Hilo'
            low='low'
            high='high'
            />
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default FinanceChart