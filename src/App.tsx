import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

const App: React.FC = () => {
    // we use min-h-screen so that we can continue to expand downwards, then w-screen to ensure it is always 100%
	return (
		<Router basename="/resume-website">
			<div className="bg-background text-white min-h-screen w-full flex flex-col overflow-hidden">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
