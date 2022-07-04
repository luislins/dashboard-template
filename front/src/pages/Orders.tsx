import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';



export function Orders() {
  const editing = { allowDeleting: true, allowEditing: true };

  
  const columns: GridColDef[] = ordersGrid;

  const formatordersData = ordersData.map(p =>
    p.id  != undefined
      ? { ...p, id: Math.random() * 500, OrderID : Math.random() * 500, status: p.Status, 
        orderId: p.OrderID, location: p.Location, customerName: p.CustomerName, orderItems: p.OrderItems, image: p.ProductImage }
      : p
  );
  const rows = formatordersData;
  
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  return (
    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    //   <Header category="Page" title="Orders" />
    //   <GridComponent
    //     id="gridcomp"
    //     dataSource={ordersData}
    //     allowPaging
    //     allowSorting
    //     allowExcelExport
    //     allowPdfExport
    //     contextMenuItems={contextMenuItems}
    //     editSettings={editing}
    //   >
    //     <ColumnsDirective>
    //       {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    //       {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
    //     </ColumnsDirective>
    //     <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    //   </GridComponent>
    // </div>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      Adicionar um paddingzinho nas linhas do datagrid
      <div className="">
        <DataGrid rows={rows} autoHeight pageSize={12} rowsPerPageOptions={[12]} disableSelectionOnClick columns={columns} />
      </div>
    </div>
  );
}