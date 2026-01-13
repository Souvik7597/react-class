
function TodoList({task,delTodo,editTodo}) {

    return (
        <ul className="space-y-2">
            {task.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md flex items-center justify-between">
                    {item.text}
                    <button onClick={()=>delTodo(item.id)}>Del</button>
                    <button onClick={()=>editTodo(item)}>Edit</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList




