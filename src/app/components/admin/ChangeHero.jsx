'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { WarningSVG } from '../svg/WarningSVG';
import { storage } from '../../../../config';
import { uploadBytesResumable, ref } from '@firebase/storage';

export const ChangeHero = () => {
	const fileInputRef = useRef(null);
	const [file, setFile] = useState(null);
	const [isUploading, setIsUploading] = useState(false);
	const [errors, setErrors] = useState({});
	const [progress, setProgress] = useState(null);
	const [uploadError, setUploadError] = useState(null);

	const validate = () => {
		let errors = {};
		if (!file) {
			errors.file = 'Please choose an image file';
		}
		return errors;
	};

	const clearForm = () => {
		if (fileInputRef.current) {
			fileInputRef.current.value = null;
		}
		setFile(null);
		// setFileUploaded(false);
		setErrors({});
	};

	const handleClick = (e) => {
		// const handleClick = async (e) => {
		e.preventDefault();

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}

		if (file) {
			setIsUploading(true);
			const existingFileRef = ref(storage, '/hero.jpg');
			const uploadTask = uploadBytesResumable(existingFileRef, file);

			uploadTask.on('state_changed', (snapshot) => {
				const snapshotProgress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(snapshotProgress);
			});

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const snapshotProgress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(snapshotProgress);
					// switch (snapshot.state) {
					// 	case 'paused':
					// 		console.log('Upload is paused');
					// 		break;
					// 	case 'running':
					// 		console.log('Upload is running', snapshotProgress, '%');
					// 		break;
					// 	default:
					// 		break;
					// }
				},
				(error) => {
					setIsUploading(false);
					setUploadError(true);
					return toast.error('Error replacing hero');
				},
				() => {
					toast.success('New hero image uploaded!');
					setIsUploading(false);
					clearForm();
				}
			);
		}
	};

	return (
		<div className='border-1 flex flex-col items-center justify-center gap-3 bg-neutral-800 rounded-lg p-3 w-full max-w-lg'>
			<div className='w-full flex flex-row items-center space-between'>
				<h2>Change Hero</h2>
				<motion.button
					onClick={handleClick}
					className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 ml-auto'
					whileTap={{ scale: 0.9 }}
					disabled={isUploading}
				>
					Upload
				</motion.button>
			</div>
			<input
				type='file'
				accept='image/*'
				className={`${
					file ? 'border-green-500' : 'border-transparent'
				} border-2 rounded-lg w-full`}
				onChange={(e) => setFile(e.target.files[0])}
				disabled={isUploading}
				ref={fileInputRef}
			/>
			{errors.file && !file && (
				<div className='flex justify-center items-center gap-1 text-orange-500'>
					<WarningSVG />
					<p>{errors.file}</p>
				</div>
			)}
			{isUploading && progress < 100 && (
				// <p>Uploading image... {Math.floor(progress)}%</p>
				<progress
					value={Math.floor(progress)}
					max='100'
					className='w-full'
					aria-label='Content loading…'
				></progress>
			)}
			{/* {isUploading && (
				<p className='animate-pulse text-yellow-500'>Uploading images...</p>
			)} */}
		</div>
	);
};
