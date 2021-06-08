import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type your new todo here"
            />
            <button className="new-todo-button">Create todo</button>
        </div>
    )
}

export default NewTodoForm;