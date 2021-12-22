import './Todo.css'
import TodoList from './Todo-List/TodoList.js'
import TodoCreate from './Todo-Create/TodoCreate.js'
import { useState } from 'react'

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id: 1, title: "Eat"},
        {id: 2, title: "Sleep"},
        {id: 3, title: "Code"},
        {id: 4, title: "Learn"}
    ])

    const eventCreateTodo = (todo) => { // menggabungkan data useState dengan user yg di input ke todo-list
        setTodos(getTodos.concat(todo))
    } 

    const eventDeleteTodo = (todoId) => { 
        var filtered = getTodos.filter((item) => { // metod filter adalah mensaring data yg dibutuhkan
            return item.id !== todoId // maka saring
        })
        setTodos(filtered)
    }

    return (
        <div>
            <h2 className="todo">Todo List</h2>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} dataDelete={eventDeleteTodo}/>
        </div>
    )
}

export default Todo; 