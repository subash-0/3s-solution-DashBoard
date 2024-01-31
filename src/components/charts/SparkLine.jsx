import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
export default class Sparkline extends PureComponent {
  render (){
    const {id,height,width,color,currentColor,data,type,} =this.props;
    return <div>
     <SparklineComponent 
     id={id} 
     height={height} 
     width={width} 
     lineWidth={1} type='Line' 
     valueType='Numeric' 
     fill={color}
     border={{color:currentColor,width:2}}
     tooltipSettings={{
                visible: true, format: '${x} :data ${yval}',
                trackLineSettings: {
                    visible: true,
                }
            }} 
    markerSettings={{ visible: ['All'], size: 2.5, fill: {color} }} dataSource={data} 
    xName='x' 
    yName='yval'>
    <Inject services={[SparklineTooltip]}/>
     </SparklineComponent>
    </div>
  }
}