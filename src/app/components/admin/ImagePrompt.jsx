'use client';

import Image from 'next/image';
import { useState } from 'react';
// import { toast } from 'sonner';
import { generateImg } from '../../utils/generateImg';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { WarningSVG } from '../svg/WarningSVG';

export const ImagePrompt = () => {
	const [imagePrompt, setImagePrompt] = useState('');
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImages, setGeneratedImages] = useState([]);
	const [errors, setErrors] = useState({});

	const validate = () => {
		let errors = {};
		if (!imagePrompt) {
			errors.imagePrompt = 'Image prompt is required';
		}
		return errors;
	};

	const handleClick = async (e) => {
		e.preventDefault();

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}

		if (imagePrompt) {
			setIsGenerating(true);
			try {
				const generatedImages = await generateImg(imagePrompt);
				setGeneratedImages(generatedImages);
				console.log(generatedImages, '<<< generatedImages');
				toast.success('Images generated!');
			} catch (error) {
				toast.error('Error generating images');
			} finally {
				setIsGenerating(false);
			}
		}
	};

	return (
		<div className='flex flex-col items-center justify-center gap-3 bg-neutral-800 rounded-lg p-3 w-full max-w-lg'>
			<h2>Change Hero Image</h2>
			<input
				type='text'
				value={imagePrompt}
				onChange={(e) => setImagePrompt(e.target.value)}
				placeholder='Enter a prompt for AI image generation'
				className={`${
					imagePrompt.length ? ' border-2 border-green-500' : ''
				} rounded-lg px-2 py-1 text-neutral-950 w-full focus:outline-none bg-neutral-200 focus:bg-neutral-50`}
			/>
			{errors.imagePrompt && imagePrompt.length === 0 && (
				<div className='flex justify-center items-center gap-1 text-orange-500'>
					<WarningSVG />
					<p>Please enter a prompt</p>
				</div>
			)}
			{generatedImages?.data?.length &&
				generatedImages.data.map((image) => (
					<Image
						key={image.url}
						src={image.url}
						alt={imagePrompt}
						height={500}
						width={500}
					/>
				))}
			{isGenerating && (
				<p className='animate-pulse text-yellow-500'>Generating image...</p>
			)}
			<motion.button
				onClick={handleClick}
				className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto'
				whileTap={{ scale: 0.9 }}
				disabled={isGenerating}
			>
				Generate
			</motion.button>
		</div>
	);
};
