import React from 'react';
import {
    TodoItemContainer,
    TodoContainerHeader,
    ButtonsContainer,
    CompletedButton,
    RemoveButton
} from './TodoListItemStyles.js';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <TodoItemContainer
            createdAt={todo.createdAt}
        >
            <TodoContainerHeader
                isCompleted={todo.isCompleted}
            >
                {todo.text}
            </TodoContainerHeader>
            <p>
                Created At: &nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <ButtonsContainer>
                <CompletedButton
                    onClick={() => {
                        onCompletedPressed(todo.id);
                    }}
                    className="completed-button">Mark As Complete</CompletedButton>
                <RemoveButton
                    className="remove-button"
                    onClick={() => onRemovePressed(todo.id)}>Remove</RemoveButton>
            </ButtonsContainer>
        </TodoItemContainer>
    );
}

export default TodoListItem;