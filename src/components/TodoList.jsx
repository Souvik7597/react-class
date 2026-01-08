
function TodoList({task}) {
    return (
        <ul className="space-y-2">
            {task.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md flex items-center justify-between">
                    {item.text}
                </li>
            ))}
        </ul>
    )
}

export default TodoList




