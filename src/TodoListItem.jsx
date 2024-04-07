export default function TodoListItem({ id, title, completed, handleDelete, handleComplete}){
    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => handleComplete(id)}/>
            <span style={ completed ? {textDecoration: 'line-through'} : null }>{title}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}