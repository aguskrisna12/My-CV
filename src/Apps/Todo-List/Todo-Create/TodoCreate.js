import './TodoCreate.css'


const TodoCreate = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(props.isEditing === true) { // jika tombol berubah menjadi save
            props.applyUpdate(props.getInputTodo); // apa yg di ketik saat ini
            return;
        }       
        const newTodo = {
            id: Math.floor(Math.random() * 100) +1,
            title: props.getInputTodo
        }
        props.onCreateTodo(newTodo)
        props.setInputTodo('')
    }
    
    const handleInputTodo = (event) => {
        props.setInputTodo(event.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={props.getInputTodo} onChange={handleInputTodo}/>
            <button type="submit">{props.isEditing ? 'Save' : 'Add'}</button>
        </form>
    )
}

export default TodoCreate;