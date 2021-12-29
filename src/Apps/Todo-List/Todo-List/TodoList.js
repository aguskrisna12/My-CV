import './TodoList.css'
// import { useState } from 'react'

const TodoList = (props) => {
    
    // const [editTodos, setEditTodos] = useState('')


    // const eventEditTodo = (event) => {
    //     setEditTodos(event.target.value)
    // }



    return (
        <ul className="todoItem">{
            props.dataTodos.map((todo) => {
                // {id: 1, title: "eat"}
                return <> 
                    <li key={todo.id}> 
                        <div className='d-flex align-items-center'>
                            {todo.title}
                            <button className='btn btn-primary ms-auto me-3' style={{borderRadius : "15px"}} onClick={()=>{}}>
                                <div>
                                    <i className="bi bi-pencil ms-auto"></i> 
                                </div>
                            </button>
                            <button className='btn btn-danger ms-auto me-3' style={{borderRadius : "15px"}} onClick={() => { props.dataDelete(todo.id)}}> 
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