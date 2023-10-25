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
		setIsSent(!isSent);
		if (isSent) {
			toast.success('But when you can it will do this!');
		} else {
			toast.error('Cannot send yet!');
		}
	};

	return (
		<div className='w-full md:max-w-lg flex flex-col gap-1 mx-auto'>
			<form
				onSubmit={handleSend}
				className='bg-neutral-800 flex flex-col p-3 rounded-lg '
			>
				<label htmlFor='name' className='text-sm px-1'>
					Name:
				</label>
				<input
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='Enter your name'
					className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic'
				/>
				<label htmlFor='email' className='text-sm px-1'>
					Email:
				</label>
				<input
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
					placeholder='Enter your email'
					className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic'
				/>
				<label htmlFor='name' className='text-sm px-1'>
					Message:
				</label>
				<textarea
					id='message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					type='text'
					placeholder='Enter your message'
					className='p-2 rounded-lg mb-3 text-neutral-900 border-none placeholder:italic resize-none'
					rows='6'
				/>
				<motion.button
					className='bg-neutral-50 text-neutral-900 hover:bg-neutral-800 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto'
					// whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Send
				</motion.button>
			</form>
		</div>
	);
};
