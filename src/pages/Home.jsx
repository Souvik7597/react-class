import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col">
            Home Page
            <div className=" flex items-center justify-center gap-2">

                <Link to="/login">
                    <button className="py-2 px-5 bg-gray-300 text-green-400">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="py-2 px-5 bg-gray-300 text-red-400">Signup</button>
                </Link>
            </div>
        </div>
    )
}
