import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
import Works from "./pages/Works";

const App: React.FC = () => {
    useLocomotiveScroll();
	// we use min-h-screen so that we can continue to expand downwards, then w-screen to ensure it is always 100%
	return (
		<Router basename="/resume-website">
			<div 
            id="scroll-container"
            className="bg-background text-white min-h-screen h-screen flex flex-col ">
				{/* Navbar */}
				<Navbar />

				{/* Main Section */}
				<main className="flex-1 overflow-y-auto scrollbar-hide">
					<Routes>
						<Route path="/" element={<LandingPage />} />
                        <Route path="/works" element={<Works />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
};

export default App;
