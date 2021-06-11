import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, toggleCompleted }) => {
    return (<div className="todo-item-container">
        <h3 className={todo.isCompleted ? "active" : "normal"}>{todo.text}</h3>
        <div className="buttons-container">
            <button
                onClick={() => {
                    const active = todo.isCompleted;
                    if (!active) {
                        toggleCompleted(todo.isCompleted = true)
                    } else {
                        toggleCompleted(todo.isCompleted = false)
                    }
                }}
                className="completed-button">Mark As Complete</button>
            <button
                className="remove-button"
                onClick={() => onRemovePressed(todo.text)}>Remove</button>
        </div>
    </div>)
}


export default TodoListItem;