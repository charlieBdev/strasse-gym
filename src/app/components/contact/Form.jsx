'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSent, setIsSent] = useState(true);

	const body = {
		name,
		email,
		message,
	};

	const handleSend = (e) => {
		e.preventDefault();
		console.log(body);
		setIsSent(!isSent);
		if (isSent) {
			toast.success('Message sent!');
		} else {
			toast.error('Please try again!');
		}
	};

	return (
		<div className="w-full md:max-w-lg flex flex-col gap-1">
			<form
				onSubmit={handleSend}
				className="flex flex-col border p-3 rounded-lg shadow-lg shadow-pink-600 hover:shadow-xl hover:shadow-pink-600"
			>
				<label htmlFor="name" className="text-sm font-headings px-1">
					Name:
				</label>
				<input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter your name"
					className="p-2 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic"
				/>
				<label htmlFor="email" className="text-sm font-headings px-1">
					Email:
				</label>
				<input
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email"
					className="p-2 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic"
				/>
				<label htmlFor="name" className="text-sm font-headings px-1">
					Message:
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					type="text"
					placeholder="Enter your message"
					className="p-2 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic resize-none"
					rows="6"
				/>
				<motion.button
					className="bg-neutral-50 text-neutral-950 font-medium rounded-full px-3 py-1 mx-auto font-headings"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Send
				</motion.button>
			</form>
		</div>
	);
};
