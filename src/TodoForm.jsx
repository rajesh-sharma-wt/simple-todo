import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({addTodo}){
    const [todo, setTodo] = useState('')

    const handleClick = (e) => {
        const uuid = uuidv4()
        addTodo({title: todo, id: uuid, completed: false})
    }

    return (
        <>
            <div id="new-todo-form">
                <label htmlFor="todo-input">New Todo</label>
                <input type="text" id="todo-input" value={todo} onChange={e => setTodo(e.target.value)}/>
                <button onClick={e => handleClick(e)}>Add Todo</button>
            </div>
        </>
    )
}