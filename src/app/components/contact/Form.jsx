'use client';

import React, { useState } from 'react';
import { Button } from '../Button';

export const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const body = {
		name,
		email,
		message,
	};

	console.log(body, '<<< body');

	return (
		<div className="w-full md:max-w-lg flex flex-col gap-1">
			<p className="font-bold text-center italic">Get in touch!</p>
			<div className="flex flex-col border p-3 rounded-lg shadow-lg shadow-pink-600  hover:shadow-xl hover:shadow-pink-600">
				<label htmlFor="name" className="">
					Name:
				</label>
				<input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter your name"
					className="p-1 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic"
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email"
					className="p-1 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic"
				/>
				<label htmlFor="name">Message:</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					type="text"
					placeholder="Enter your message"
					className="p-1 rounded-lg mb-3 text-neutral-950 shadow shadow-pink-600 placeholder:italic resize-none"
					rows="6"
				/>
				<Button text="Send" />
			</div>
		</div>
	);
};
