import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === '') {
            alert('Task cannot be empty');
            return;
        }
        addTodo(value);
        setValue("")
    }
    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='todo-input'
                    placeholder='what is the task today?'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Add 
                </button>
            </form>
        </div>
    )
}

export default TodoForm
