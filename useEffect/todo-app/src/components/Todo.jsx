import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodoData = async () => {
        const newTodo = {
            title: input,
            status: false
        };
        try {
            const res = await fetch('http://localhost:8000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            });
            getTodoData();
            return res.json();
        } catch (error) {
            console.log(error);
        }
    }

    const patchData = (id, status) => {
        const updatedTodo = {
            status: !status
        };
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
            .then(() => {
                getTodoData();
                console.log('Updated');
            })
            .catch(() => {
                console.log('Error');
            });
    }

    const deletetodo = (id) => {
      fetch(`http://localhost:8000/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            getTodoData();
            console.log('deleted');
        })
        .catch(() => {
            console.log('Error');
        });
    }

    const getTodoData = async () => {
        try {
            const res = await fetch('http://localhost:8000/todos');
            const data = await res.json();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodoData();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type='text'
                placeholder='Enter todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodoData}>Add Todo</button>
            <h1>Todo Lists</h1>
            <div>
                {todos?.map((item) => (
                    <div key={item.id} className='todocard'>
                        <h3>{item.title}</h3>
                        <p>{item.status ? 'Completed' : 'Pending'}</p>
                        <button onClick={() => patchData(item.id, item.status)}>Toggle</button>
                        <button onClick={() => deletetodo(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;