'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ text }) => {
	return (
		<motion.button
			className="bg-neutral-50 text-neutral-950 font-medium rounded-full px-3 py-1 mx-auto"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			{text}
		</motion.button>
	);
};
