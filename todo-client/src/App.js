import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList/TodoList';
import { AppContainer } from './AppStyles.js';

const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default hot(module)(App);