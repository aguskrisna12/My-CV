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

        // <form class="input-group mb-3" onSubmit={handleSubmit}>
        //     <input type="text" value={props.getInputTodo} onChange={handleInputTodo} className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        //     <button class="btn btn-outline-secondary" type="submit" id="button-addon2">{props.isEditing ? 'Save' : 'Add'}</button>
        // </form>
        <div className='form justify-align-center'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={props.getInputTodo} onChange={handleInputTodo}/>
                <button type="submit">{props.isEditing ? 'Save' : 'Add'}</button>
                {/* <label for="name" className='label-name'>
                    <span className='content-name'>Name</span>
                </label> */}
            </form>
        </div>
    )
}

export default TodoCreate;