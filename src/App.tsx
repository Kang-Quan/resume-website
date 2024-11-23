import { useState } from "react";
import "./index.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
			{/* Header Section */}
			<div className="text-center">
				<h1 className="text-4xl font-bold text-yellow-400 mb-4">
					Tailwind CSS Test
				</h1>
				<p className="text-gray-300">
					If you see this styled page, Tailwind CSS is working!
				</p>
			</div>

			{/* Button Section */}
			<div className="mt-6">
				<button
					className="px-4 py-2 bg-blue-500 text-black rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
					onClick={() => setCount(count + 1)}
				>
					Count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
