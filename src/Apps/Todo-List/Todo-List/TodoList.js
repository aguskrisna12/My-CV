import './TodoList.css'

const TodoList = (props) => {
    // console.log(prop.dataList)
    return (
        <ul>{
            props.dataTodos.map((todo) => {
                // {id: 1, title: "eat"}
                return <> 
                    <li key={todo.id}> 
                        <div>
                            {todo.title}
                        <button onClick={() => {
                            props.dataDelete(todo.id)}} type=""> <i className="bi bi-trash"></i></button> 
                        </div>
                    </li>
                    
                </> 
            })
        }</ul>
    )
}

export default TodoList;