
function TodoList({task,delTodo}) {

    return (
        <ul className="space-y-2">
            {task.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md flex items-center justify-between">
                    {item.text}
                    <button onClick={()=>delTodo(item.id)}>Del</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList




