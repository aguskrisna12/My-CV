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

    // const [getTodos, setTodos] = useState({title :  "", id: 1})

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    } 

    const eventDeleteTodo = (todoId) => {
        var filtered = getTodos.filter((item) => {
            return item.id !== todoId
        })
        setTodos(filtered)
    }

    return (
        <div>
            <h2>Todo List</h2>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} dataDelete={eventDeleteTodo}/>
        </div>
    )
}

export default Todo; 