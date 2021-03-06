import './Todo.css'
import TodoList from './Todo-List/TodoList.js'
import TodoCreate from './Todo-Create/TodoCreate.js'
import { useState } from 'react'

const Todo = () => {
    const [getTodos, setTodos] = useState(
        [
        {id: 1, title: "Eat"},
        {id: 2, title: "Sleep"},
        {id: 3, title: "Find Jobs"},
        {id: 4, title: "Repeat"}
        ]
    );
    const [isEditing,setIsEditing] = useState(false); // tombol edit turn off/on
    const [editIndex,setEditIndex] = useState(null); //
    const [getInputTodo, setInputTodo] = useState('');


    const eventCreateTodo = (todo) => { // menggabungkan data useState dengan user yg di input ke todo-list
        setTodos(getTodos.concat(todo))
    } 

    const eventDeleteTodo = (todoId) => { 
        var filtered = getTodos.filter((item) => { // metod filter adalah mensaring data yg dibutuhkan
            return item.id !== todoId // maka saring
        })
        setTodos(filtered)
    }

    const handleEdit = (index) => { // ketika meng klik tombol edit
        setIsEditing(true); // tombol add menjadi save
        setEditIndex(index); // menyimpan index data yg di edit
        setInputTodo(getTodos[index].title) // menampilkan title di dalam form
    }

    const applyUpdate = (newTitle) => { 
        const newList = [...getTodos]; // proses menyalin
        newList[editIndex].title = newTitle
        setTodos(newList);
        setInputTodo('');
        setIsEditing(false);
    }


    return (
        <div>
            <h2 className="todo">Todo List</h2>
            <TodoCreate onCreateTodo={eventCreateTodo} isEditing={isEditing} getInputTodo={getInputTodo} setInputTodo={setInputTodo} applyUpdate={applyUpdate} />
            <TodoList dataTodos={getTodos} dataDelete={eventDeleteTodo} isEditing={isEditing} handleEdit={handleEdit}/>
        </div>
    )
}

export default Todo; 