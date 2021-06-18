import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';

import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadTodos }) => {
    useEffect(() => {
        startLoadTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>

    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, index) => <TodoListItem
                key={index}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
            />)}
        </div>
    )

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);