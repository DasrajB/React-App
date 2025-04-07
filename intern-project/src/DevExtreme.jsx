import {useEffect, useState} from 'react'
import 'devextreme/dist/css/dx.light.css'
import DataGrid, {Column, ColumnChooser, Editing, FilterRow, SearchPanel} from 'devextreme-react/data-grid'
export default function DevExtreme(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
 
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
                const result = await response.json()
                setData(result);
            }
            catch(error){
                console.error(error.message)
            }
            finally{
            setLoading(false)
            }
        };
        fetchData()

    }, [])
    if(loading) return <p>Loading...</p>
    return<>
    <DataGrid dataSource={data} keyExpr="id" allowColumnReordering={true} allowColumnResizing={true}>
        <Column dataField='id' caption='UserId'fixed={true}/>
        <Column dataField='title' caption='Title' sortOrder="asc" />
        <Column dataField='completed' caption='Completed'/>
        <FilterRow visible={true}/>
        <SearchPanel visible={true}/>
        <Editing mode="popup" allowAdding={true} allowUpdating={true} allowDeleting={true}/>
    </DataGrid>
    </>
}