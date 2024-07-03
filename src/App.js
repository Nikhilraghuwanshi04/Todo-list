// src/App.js
import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoList />
            </header>
        </div>
    );
}

export default App;
