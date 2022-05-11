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

        <div className='form justify-align-center'>
            <form onSubmit={handleSubmit}>
                <input className='input' type="text" value={props.getInputTodo} onChange={handleInputTodo} placeholder="Input..." aria-describedby="button-addon2"/>
                <button className='btn btn-primary' id="button-addon2" type="submit">{props.isEditing ? 'Save' : 'Save'}</button>
            </form>
        </div>
    )
}

export default TodoCreate;