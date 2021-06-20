import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from '../thunks';
import { getTodos } from '../selectors';
import { NewTodoFormContainer, NewTodoInput, NewTodoButton } from './NewTodoFormStyles.js';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <NewTodoFormContainer>
            <NewTodoInput
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type your new todo here"
            />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue)
                        setInputValue('');
                    }
                }}>Create todo</NewTodoButton>
        </NewTodoFormContainer>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);