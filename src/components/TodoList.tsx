import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchedTodos, setTodoPage } from '../store/action-creators/todo';


const TodoList: FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);
    const {fetchedTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchedTodos(page, limit)
    }, [page])

    if (loading) {
        return <h2>Please, wait! Fetching...</h2>
    }

    if (error) {
        return <h2>Error with fetching! Try refresh your browser.</h2>
    }

    return (
        <div>
            <h1>You should complete such tasks:</h1>
            <ul>
                {todos.map(todo => 
                    <div key={todo.id}>
                        <input type="checkbox" checked={todo.completed} readOnly/>
                        <h2>{todo.title}</h2>
                    </div>
                )}
            </ul>
            <div style={{display: 'flex'}}>
                {pages.map(p => 
                    <div
                        onClick={() => setTodoPage(p)} 
                        key={p} 
                        style={{padding: '3px 2px', margin: '0 5px' ,border: p === page ? '3px solid green' : 'none'}}
                    >{p}</div>
                )}
            </div>
        </div>
    )
}

export default TodoList;