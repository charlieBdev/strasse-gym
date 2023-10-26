'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BackSVG } from './svg/BackSVG';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import login from '../../firebase/auth/login';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();

		const { result, error } = await login(email, password);

		if (error) {
			toast.error('Login error');
			return;
		}
		// else
		toast.success('Login successful');
		router.push('/admin');
	};

	const handleReset = async (e) => {
		e.preventDefault();
		toast.error('Cannot do this yet');
	};

	return (
		<form
			onSubmit={handleLogin}
			className='w-full h-[100dvh] flex flex-col items-center justify-center rounded-lg shadow-lg gap-6 p-6 md:px-16 lg:px-24 xl:px-32 mx-auto'
		>
			<p>Admin Login</p>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='w-72 p-2 rounded-lg mb-3 text-neutral-950 placeholder:italic'
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='w-72 p-2 rounded-lg mb-3 text-neutral-950 placeholder:italic'
			/>
			<motion.button
				className='bg-blue-600 hover:bg-blue-400 text-neutral-50 font-medium rounded-full px-3 py-1 mx-auto'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				Log In
			</motion.button>
			<motion.button
				className='text-blue-600 hover:underline'
				// whileHover={{ scale: 1.1 }}
				// whileTap={{ scale: 0.9 }}
				onClick={handleReset}
			>
				Reset Password
			</motion.button>
			<motion.div
				whileTap={{ scale: 0.9 }}
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
			>
				<Link href='/'>
					<BackSVG />
				</Link>
			</motion.div>
		</form>
	);
};
