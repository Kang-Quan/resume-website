import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-background text-white py-4 z-20">
			<div className="container mx-auto flex justify-between items-center px-3">
				{/* Logo as Clickable Link */}
				<Link
					to="/"
					className="text-lg font-bold text-blue hover:text-blue transition z-20"
				>
					new kq()
				</Link>

				{/* Hamburger Icon */}
				<button
					className="block md:hidden text-blue z-20"
					onClick={toggleMenu}
				>
					{isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Navigation Links */}
				<ul
					className={`fixed bottom-0 right-0 h-auto bg-transparent transform transition-transform duration-0 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					} md:static md:transform-none md:flex md:space-x-8 flex-col md:flex-row items-end md:items-center space-y-4 md:space-y-0 p-4 z-20 md:z-20`}
				>
					<li>
						<Link
							to="/about"
							className="group transition"
							onClick={() => setIsMenuOpen(false)}
						>
							<span className="group-hover:text-white text-white">
								kq
							</span>
							<span className="group-hover:text-blue">
								.about()
							</span>
						</Link>
					</li>
					<li>
						<Link
							to="/works"
							className="group transition"
							onClick={() => setIsMenuOpen(false)}
						>
							<span className="group-hover:text-white text-white">
								kq
							</span>
							<span className="group-hover:text-blue">
								.works()
							</span>
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="group transition"
							onClick={() => setIsMenuOpen(false)}
						>
							<span className="group-hover:text-white text-white">
								kq
							</span>
							<span className="group-hover:text-blue">
								.contact()
							</span>
						</Link>
					</li>
					<div className="flex flex-row space-x-8">
						<li>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue transition"
								onClick={() => setIsMenuOpen(false)}
							>
								<FaLinkedin size={24} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue transition"
								onClick={() => setIsMenuOpen(false)}
							>
								<FaGithub size={24} />
							</a>
						</li>
					</div>
				</ul>

				{/* Dim Overlay for when hanburger is clicked */}
				<div
					className={`fixed inset-0 bg-black z-10 transition-opacity duration-700 ${
						isMenuOpen
							? "opacity-70 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
					onClick={() => setIsMenuOpen(false)}
				></div>
			</div>
		</nav>
	);
};

export default Navbar;
