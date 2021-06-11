import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { completedTodo, removeTodo } from './actions';

import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, toggleCompleted }) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, index) => <TodoListItem
                key={index}
                todo={todo}
                onRemovePressed={onRemovePressed}
                toggleCompleted={toggleCompleted}
            />)}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    toggleCompleted: toggleAction => dispatch(completedTodo(toggleAction))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);