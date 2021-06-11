export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const TODO_COMPLETED = 'TODO_COMPLETED';
export const completedTodo = isCompleted => ({
    type: TODO_COMPLETED,
    payload: { isCompleted }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});