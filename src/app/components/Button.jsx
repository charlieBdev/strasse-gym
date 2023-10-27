'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ text }) => {
	return (
		<motion.button
			className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto text-md md:text-lg lg:text-xl xl:text-2xl'
			// whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			{text}
		</motion.button>
	);
};
