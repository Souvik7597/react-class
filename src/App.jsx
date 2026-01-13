
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

// import { useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"

// export default function App() {

//   const [task, setTask] = useState([])

//   const addTodo = (data,setData) => {
//     setTask([...task, { text: data, id: Date.now() }])
//     setData("")
//   }

//   return (
//     <div className='h-[100vh] flex items-center justify-center'>
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📝 To-Do List
//         </h1>
//         <TodoForm  addTodo={addTodo}/>
//         <TodoList  task={task}/>
//       </div>
//     </div>
//   )
// }


//localStorage


// import { useEffect, useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"

// export default function App() {

//   const [task, setTask] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   })

//   useEffect(() => {
//   localStorage.setItem('todos', JSON.stringify(task));
// }, [task]);


//   const addTodo = (data,setData) => {
//     setTask([...task, { text: data, id: Date.now() }])
//     setData("")
//   }

//   return (
//     <div className='h-[100vh] flex items-center justify-center'>
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📝 To-Do List
//         </h1>
//         <TodoForm  addTodo={addTodo}/>
//         <TodoList  task={task}/>
//       </div>
//     </div>
//   )
// }



//delete

// import { useEffect, useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"

// export default function App() {

//   const [task, setTask] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   })

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(task));
//   }, [task]);

//   const delTodo = (id) => {
//     console.log(id)
//     setTask(task.filter((item) => item.id !== id))
//   }
//   const addTodo = (data, setData) => {
//     setTask([...task, { text: data, id: Date.now() }])
//     setData("")
//   }

//   return (
//     <div className='h-[100vh] flex items-center justify-center'>
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📝 To-Do List
//         </h1>
//         <TodoForm addTodo={addTodo} />
//         <TodoList task={task} delTodo={delTodo} />
//       </div>
//     </div>
//   )
// }

// delete with modal

// import { useEffect, useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"
// import DeleteModal from "./components/DeleteModal";

// export default function App() {

//   const [task, setTask] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   })

//   const [showDelModel, setShowDelModel] = useState(false)
//   const [todoToDelete, setTodoToDelete] = useState(null)

//   const handleDeleteClick = (id)=>{
//     setTodoToDelete(id)
//     setShowDelModel(true)
//   }
//   const confirmDelete = ()=>{
//     setTask(task.filter((item) => item.id !== todoToDelete))
//     setShowDelModel(false)
//     setTodoToDelete(null)
//   }
//   const cancelDelete = ()=>{
//     setShowDelModel(false)
//     setTodoToDelete(null)
//   }


//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(task));
//   }, [task]);

//   const addTodo = (data, setData) => {
//     setTask([...task, { text: data, id: Date.now() }])
//     setData("")
//   }

//   return (
//     <div className='h-[100vh] flex items-center justify-center'>
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           📝 To-Do List
//         </h1>
//         <TodoForm addTodo={addTodo} />
//         <TodoList task={task} delTodo={handleDeleteClick} />
//       </div>
//       {showDelModel && (<DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete}   />)}
//     </div>
//   )
// }

// update todo 

import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";

export default function App() {

  const [task, setTask] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  })

  const [showDelModel, setShowDelModel] = useState(false)
  const [todoToDelete, setTodoToDelete] = useState(null)

  const [showEditModel, setShowEditModel] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(null)


  //delete
  const handleDeleteClick = (id) => {
    setTodoToDelete(id)
    setShowDelModel(true)
  }
  const confirmDelete = () => {
    setTask(task.filter((item) => item.id !== todoToDelete))
    setShowDelModel(false)
    setTodoToDelete(null)
  }
  const cancelDelete = () => {
    setShowDelModel(false)
    setTodoToDelete(null)
  }


  //edit
  const handleEditClick = (task) => {
    setTodoToEdit(task)
    setShowEditModel(true)
  }
  const confirmEdit = (newText) => {
    setTask(task.map((item) => item.id === todoToEdit.id ? { ...task, text: newText } : item))
    setShowEditModel(false)
    setTodoToEdit(null)
  }
  const cancelEdit = () => {
    setShowEditModel(false)
    setTodoToEdit(null)
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(task));
  }, [task]);

  const addTodo = (data, setData) => {
    setTask([...task, { text: data, id: Date.now() }])
    setData("")
  }

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          📝 To-Do List
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList task={task} delTodo={handleDeleteClick} editTodo={handleEditClick} />
      </div>
      {showDelModel && (<DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />)}

      {showEditModel && (<UpdateModal onConfirm={confirmEdit} onCancel={cancelEdit} currentText={todoToEdit.text} />)}
    </div>
  )
}