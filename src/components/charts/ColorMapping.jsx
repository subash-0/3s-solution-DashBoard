import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries,Category,Legend, Inject, RangeColorSettingDirective,RangeColorSettingsDirective, Tooltip} from "@syncfusion/ej2-react-charts"
import {colorMappingData,ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis,rangeColorMapping} from "../../data/dummy"
import { useStateContext } from '../../contexts/contextProvide';
const ColorMappingChart = () => {
    const {currentMode }= useStateContext();
  return (
    <ChartComponent 
        id='chart'
    primaryXAxis={ColorMappingPrimaryXAxis} 
    primaryYAxis={ColorMappingPrimaryYAxis}
    chartArea={{border:{width:0}}}
    legendSettings={{mode:'Range', background:'white'}}
    tooltip={{enable:true}}
    background={currentMode==='Dark'?'#33373E':'#fff'}
    >
        <Inject  services={[ColumnSeries,Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
            <SeriesDirective  
            dataSource={colorMappingData}
            xName='x'
            yName='y'
            name='USA'
            type='Column'
            cornerRadius={{
                topLeft:10,
                topRight:10,
            }}
            />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
            {rangeColorMapping.map((item,i)=>(
                <RangeColorSettingDirective key={i} {...item}   />
            ))}
        </RangeColorSettingsDirective>
    </ChartComponent>
  )
}

export default ColorMappingChart