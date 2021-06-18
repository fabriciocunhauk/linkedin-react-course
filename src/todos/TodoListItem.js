import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    console.log(todo);

    return (<div className="todo-item-container">
        <h3 className={todo.isCompleted && "active"}>{todo.text}</h3>
        <div className="buttons-container">
            <button
                onClick={() => {
                    onCompletedPressed(todo.id);
                }}
                className="completed-button">Mark As Complete</button>
            <button
                className="remove-button"
                onClick={() => onRemovePressed(todo.id)}>Remove</button>
        </div>
    </div>)
}

export default TodoListItem;