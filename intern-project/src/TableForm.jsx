import {useState} from 'react'
import DataGrid, {Column, FilterRow} from 'devextreme-react/data-grid';
import SelectBox from "devextreme-react/select-box"
import Button from "devextreme-react/button"
import CheckBox from "devextreme-react/check-box"

export default function TableForm({tasks, completeTask, editTask, deleteTask}){
    const [filterStatus, setFilterStatus] = useState("All")

    //filter by status
        const filteredTasks = filterStatus === "All" ? tasks : tasks.filter((task)=>task.completed === filterStatus)
        const statusOptions = ["All", "completed", "pending"]
    
return <div>

<SelectBox items={statusOptions} placeholder="Filter by Status" onValueChanged={(e)=>{setFilterStatus(e.value)}} value={filterStatus}/>
<DataGrid dataSource={filteredTasks}>
<Column dataField="id" caption="ID"/>
<Column dataField="text" caption="Task"/>
<Column dataField="completed" caption="Status" 
 />
<Column
cellRender={({data})=>(<>
<Button text="Complete" onClick={() => completeTask(data.id)}/>
<Button text="Edit" onClick={() => editTask(data.id)}/>
<Button text="Delete" onClick={() => deleteTask(data.id)}/>
</>
)}
 />

</DataGrid>
</div>
}