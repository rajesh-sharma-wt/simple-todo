import TodoListItem from "./TodoListItem"

export default function TodoList({todos, handleComplete, handleDelete}) {
    return(
        <ul style={{listStyleType: 'none'}}>
            {
                todos.length > 0 && todos.map(todo => {
                    return <TodoListItem key={todo.id} {...todo} handleComplete={handleComplete} handleDelete={handleDelete}/>
                })
            }
        </ul>
    )
}