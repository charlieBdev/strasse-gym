'use client';

import Image from 'next/image';
import { useState } from 'react';
// import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { WarningSVG } from '../svg/WarningSVG';

export const ChangeHero = () => {
	const [file, setFile] = useState(null);
	const [isUploading, setIsUploading] = useState(false);
	const [errors, setErrors] = useState({});

	const validate = () => {
		let errors = {};
		if (!file) {
			errors.file = 'Please choose an image file';
		}
		return errors;
	};

	const handleClick = async (e) => {
		e.preventDefault();

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}
		toast.success('Cannot do yet');
	};

	return (
		<div className='flex flex-col items-center justify-center gap-3 bg-neutral-800 rounded-lg p-3 w-full max-w-lg'>
			<h2>Change Main Image</h2>
			<input
				type='file'
				accept='image/*'
				className={`${
					file ? 'border-2 border-green-500' : ''
				} rounded-lg w-full`}
				onChange={(e) => setFile(e.target.files[0])}
				disabled={isUploading}
			/>
			{errors.file && !file && (
				<div className='flex justify-center items-center gap-1 text-orange-500'>
					<WarningSVG />
					<p>{errors.file}</p>
				</div>
			)}

			{isUploading && (
				<p className='animate-pulse text-yellow-500'>Uploading images...</p>
			)}
			<motion.button
				onClick={handleClick}
				className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto'
				whileTap={{ scale: 0.9 }}
				disabled={isUploading}
			>
				Upload
			</motion.button>
		</div>
	);
};
