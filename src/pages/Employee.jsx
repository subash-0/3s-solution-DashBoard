import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,ContextMenu,Page,Toolbar,Search,Inject} from "@syncfusion/ej2-react-grids";
import {employeesData,employeesGrid} from "../data/dummy"
import {Header} from "../components";
const Employees = () => {
  return (
    <div className='m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title="Employees" />
      <GridComponent id='gridcomp'
      dataSource={employeesData}
      allowPaging
      toolbar={['Search']}
      >
        <ColumnsDirective>
        { employeesGrid.map((item,i)=>(
          <ColumnDirective key={i} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees