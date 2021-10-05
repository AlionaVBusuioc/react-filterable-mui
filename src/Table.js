import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {field: "id", headerName: "ID"},
    {field: "email", headerName: "Email", width: 600},
    {field: "name", headerName: "Name", width: 1000}
]

const DataTable = () => {
const [tableData, setTableData] = useState([]);
const api = "https://jsonplaceholder.typicode.com/users"
useEffect(() =>{
    fetch(api)
    .then((data) => data.json())
    .then((data) => setTableData(data))
})
    return (
        <div style={{height: 700, width: "100%"}}>
           <DataGrid 
           rows={tableData}
           columns={columns}
           pageSize={10}
           />
        </div>
    )
}

export default DataTable;



