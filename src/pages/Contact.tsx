import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setResponseMessage("");

		try {
			const response = await fetch("https://resume-telebot.vercel.app/api/sendMessage", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (response.ok) {
				setResponseMessage("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" }); // Reset form
			} else {
				setResponseMessage(data.error || "Failed to send message.");
			}
		} catch (error) {
			setResponseMessage("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-background text-white h-full w-full flex flex-col items-center justify-center px-4">
			<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
				Contact Me
			</h1>
			<p className="text-sm sm:text-base md:text-lg text-gray-400 text-center m-2">
				Have a question or want to collaborate? Feel free to reach out!
			</p>

			{/* Contact Form */}
			<form
				onSubmit={handleSubmit}
				className="bg-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col space-y-4 max-h-[100%] overflow-auto"
			>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your Name"
					className="p-2 sm:p-3 w-full rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-gold text-sm sm:text-base"
					required
				/>

				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Your Email"
					className="p-2 sm:p-3 w-full rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-gold text-sm sm:text-base"
					required
				/>

				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Your Message"
					rows={5}
					className="p-2 sm:p-3 w-full rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-gold text-sm sm:text-base min-h-12"
					required
				></textarea>

				<button
					type="submit"
					className="bg-gold text-black font-bold py-2 sm:py-3 rounded-lg hover:bg-opacity-80 transition duration-300 text-sm sm:text-base"
					disabled={isLoading}
				>
					{isLoading ? "Sending..." : "Send Message"}
				</button>

				{/* Response Message */}
				{responseMessage && (
					<p className="text-center text-sm sm:text-base text-gray-400 mt-2">
						{responseMessage}
					</p>
				)}
			</form>

			{/* Social Links */}
			<div className="flex space-x-6 mt-6 sm:mt-8">
				<a
					href="mailto:kangquanlee@gmail.com"
					className="text-gray-400 hover:text-blue transition text-2xl sm:text-3xl"
				>
					<FaEnvelope />
				</a>
				<a
					href="https://www.linkedin.com/in/lee-kang-quan/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-blue transition text-2xl sm:text-3xl"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/Kang-Quan"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-blue transition text-2xl sm:text-3xl"
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default Contact;
