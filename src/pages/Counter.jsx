import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex items-center justify-center h-[100vh] gap-5">
            <button onClick={() => setCount(count - 1)}
                className="w-10 h-10 text-4xl pb-2 flex items-center justify-center rounded-full bg-gray-400 text-white">
                -
            </button>

            <span className={`text-4xl font-bold w-10 flex items-center justify-center ${count > 0 ? "text-green-700" : count < 0 ? "text-red-700" : "text-black"}`}>
                {count}
            </span>

            <button onClick={() => setCount(count + 1)}
                className="w-10 h-10 text-4xl flex items-center justify-center rounded-full pb-2 bg-indigo-500 text-white">
                +
            </button>

            <button onClick={() => setCount(0)}
                className="w-20 h-10 rounded-lg bg-red-600 text-white">
                Reset
            </button>
        </div>
    )
}
