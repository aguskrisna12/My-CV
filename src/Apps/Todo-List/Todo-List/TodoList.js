import './TodoList.css'


const TodoList = (props) => {
    return (
        <ul className="todoItem">{
            props.dataTodos.map((todo,index) => {
                // {id: 1, title: "eat"}
                return <> 
                    <li key={todo.id}> 
                        <div className='d-flex align-items-center'>
                            {todo.title}
                            <button className='btn btn-primary ms-auto me-3' 
                                disabled={props.isEditing === true} 
                                style={{borderRadius : "15px"}} 
                                onClick={()=>{props.handleEdit(index)}}>
                                <div>
                                    <i className="bi bi-pencil ms-auto"></i> 
                                </div>
                            </button>
                            <button className='btn btn-danger me-3' disabled={props.isEditing === true} style={{borderRadius : "15px"}} onClick={() => { props.dataDelete(todo.id)}}> 
                                <div>
                                    <i className="bi bi-trash"></i>  
                                </div>
                            </button> 
                        </div>
                    </li>

                </> 
            })
        }</ul>
    )
}

export default TodoList;