import { useState } from 'react'

function TodoForm({ addTodo }) {
    const [data, setData] = useState("")
    const handleSubmit = () => {
        if (!data.trim()) return
        addTodo(data, setData)
    }
    return (
        <div className="flex mb-4">
            <input
                type="text"
                placeholder="Enter a task"
                value={data}
                onChange={e => setData(e.target.value)}
                className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button
                onClick={handleSubmit}
                className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
            >
                Add
            </button>
        </div>
    )
}

export default TodoForm