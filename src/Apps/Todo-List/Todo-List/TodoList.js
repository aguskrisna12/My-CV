import './TodoList.css'

const TodoList = (props) => {
    // console.log(prop.dataList)
    return (
        <ul className="todoItem">{
            props.dataTodos.map((todo) => {
                // {id: 1, title: "eat"}
                return <> 
                    <li key={todo.id}> 
                        <div>
                            {todo.title}
                            <button onClick={() => { props.dataDelete(todo.id)}}> 
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