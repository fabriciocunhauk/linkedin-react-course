import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {
    getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
} from './selectors';

import {
    loadTodos,
    removeTodoRequest,
    markTodoAsCompletedRequest
} from './thunks';

import './TodoList.css';

const TodoList = ({
    completedTodos,
    incompletedTodos,
    onRemovePressed,
    onCompletedPressed,
    isLoading,
    startLoadTodos }) => {

    useEffect(() => {
        startLoadTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>

    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompletedTodos.map((todo, index) => <TodoListItem
                key={index}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
            />)}
            <h3>Completed:</h3>
            {completedTodos.map((todo, index) => <TodoListItem
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
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id, isCompleted) => dispatch(markTodoAsCompletedRequest(id, isCompleted)),
    startLoadTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);