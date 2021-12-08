import './TodoCreate.css'
import { useState } from 'react';

const TodoCreate = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();        
        const newTodo = {
            id: Math.floor(Math.random() * 100) +1,
            title: getInputTodo
        }
        
        props.onCreateTodo(newTodo)
        
        setInputTodo('')
    }
    
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    const [getInputTodo, setInputTodo] = useState('');

    
    
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate;