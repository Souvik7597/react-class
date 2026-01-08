
//using map
// import { useState } from "react"

// export default function App() {
//     const [data, setData] = useState("")
//     const [task, setTask] = useState([])

//     const addTask = () => {
//         setTask([...task, { text: data, id: Date.now() }])
//         setData("")
//     }

//     return (
//         <div className='h-[100vh] flex items-center justify-center'>
//             <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//                 <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//                     📝 To-Do List
//                 </h1>

//                 <div className="flex mb-4">
//                     <input
//                         type="text"
//                         placeholder="Enter a task"
//                         value={data}
//                         onChange={e => setData(e.target.value)}
//                         className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
//                     />
//                     <button
//                         onClick={addTask}
//                         className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
//                     >
//                         Add
//                     </button>
//                 </div>

//                 <ul className="space-y-2">
//                     {task.map((item, index) => (
//                         <li key={index} className="bg-gray-100 p-2 rounded-md flex items-center justify-between">
//                             {item.text}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }



//seperate files

import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

export default function App() {
 
  const [task, setTask] = useState([])

  const addTodo = (data,setData) => {
    setTask([...task, { text: data, id: Date.now() }])
    setData("")
  }

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          📝 To-Do List
        </h1>
        <TodoForm  addTodo={addTodo}/>
        <TodoList  task={task}/>
      </div>
    </div>
  )
}

