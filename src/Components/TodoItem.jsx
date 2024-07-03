// src/TodoItem.js
import React from 'react';
import './TodoList.css';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={toggleTask}>{task.text}</span>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
};

export default TodoItem;