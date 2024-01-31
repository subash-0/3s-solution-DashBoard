import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,ContextMenu,Page,Toolbar,Search,Sort,Selection,Edit, Inject, Filter} from "@syncfusion/ej2-react-grids";
import {customersData,customersGrid} from "../data/dummy"
import {Header} from "../components";
const Customer = () => {
  return (
    <div className='m-2 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title="Customers" />
      <GridComponent id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      width='auto'
      >
        <ColumnsDirective>
        { customersGrid.map((item,i)=>(
          <ColumnDirective key={i} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Sort,Toolbar, Selection, Edit,Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customer