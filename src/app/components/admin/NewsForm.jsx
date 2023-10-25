'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { storage, db } from '../../../../config';
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage';
import {
	addDoc,
	collection,
	serverTimestamp,
	doc,
	updateDoc,
} from 'firebase/firestore';
// import { Loading } from '../Loading';
// import Image from 'next/image';
// import { TinyMCEEditor } from '../admin/TinyMCEEditor';

export const NewsForm = ({ newsToEdit }) => {
	const isEditMode = !!newsToEdit.id;
	const fileInputRef = useRef(null);

	console.log(newsToEdit.imageUrl);

	const [isUploadingFile, setIsUploadingFile] = useState(false);
	const [fileUploaded, setFileUploaded] = useState(false);
	const [isSubmittingForm, setIsSubmittingForm] = useState(false);
	const [progress, setProgress] = useState(null);
	const [errors, setErrors] = useState({});

	const initialData = {
		title: newsToEdit.title || '',
		content: newsToEdit.content || '',
		imageAlt: newsToEdit.imageAlt || '',
	};
	const [data, setData] = useState(initialData);
	const { title, content, imageAlt } = data;

	const [file, setFile] = useState(null);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const clearForm = () => {
		setData(initialData);
		if (fileInputRef.current) {
			fileInputRef.current.value = null;
		}
		setFile(null);
		setFileUploaded(false);
		setErrors({});
	};

	const validate = () => {
		let errors = {};
		if (!title) {
			errors.title = 'Title is required';
		}
		if (!content) {
			errors.content = 'Content is required';
		}
		if (!isEditMode) {
			if (!file) {
				errors.file = 'Please choose an image file';
			}
		}
		if (!imageAlt) {
			errors.imageAlt = 'Image alt is required';
		}
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let errors = validate();

		if (Object.keys(errors).length) {
			return setErrors(errors);
		}

		if (!isEditMode) {
			// if (!file) {
			// 	setErrors({ file: 'Please choose an image file' });
			// }

			setIsUploadingFile(true);

			const name = new Date().getTime() + `_${file.name}`;
			const storageRef = ref(storage, '/news/' + name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setProgress(progress);
					// switch (snapshot.state) {
					// 	case 'paused':
					// 		console.log('Upload is paused');
					// 		break;
					// 	case 'running':
					// 		console.log('Upload is running');
					// 		break;
					// 	default:
					// 		break;
					// }
				},
				// unnsuccessful image uploads
				(error) => {
					console.log(error);
					setIsUploadingFile(false);
					return toast.error('Error uploading image file');
				},
				// successful image uploads
				async () => {
					setIsUploadingFile(false);
					setFileUploaded(true);
					setIsSubmittingForm(true);

					try {
						const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
						const newsData = {
							...data,
							imageUrl: downloadURL,
							created: serverTimestamp(),
						};
						await addDoc(collection(db, 'news'), newsData);
						toast.success('News added!');
						clearForm();
					} catch (error) {
						return toast.error('Error adding news (Firestore)');
					} finally {
						setIsSubmittingForm(false);
					}
				}
			);
		} else if (isEditMode) {
			setIsSubmittingForm(true);
			try {
				await updateDoc(doc(db, 'news', newsToEdit.id), {
					title: data.title,
					content: data.content,
					imageAlt: data.imageAlt,
					// You can update other fields as needed
				});
				toast.success('News updated!');
			} catch (error) {
				toast.error('Error updating news');
			} finally {
				setIsSubmittingForm(false);
			}
			// toast.success('In edit mode!');
		}
	};

	return (
		<div className='w-full md:max-w-lg flex flex-col items-center justify center gap-1'>
			{/* {isSubmittingForm ? (
				<Loading />
			) : ( */}
			<form
				className='bg-neutral-800 flex flex-col items-center justify-center gap-3 rounded-lg p-3 w-full'
				onSubmit={handleSubmit}
			>
				<h2>{isEditMode ? 'Edit' : 'Add'} News</h2>
				<input
					type='text'
					placeholder='Add a title'
					className={`${
						title.length ? ' bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full`}
					value={title}
					name='title'
					onChange={handleChange}
				/>
				{errors.title && title.length === 0 && (
					<p className='text-red-500'>{errors.title}</p>
				)}
				{/* <TinyMCEEditor content={content} setContent={setContent} /> */}
				<textarea
					rows='9'
					type='text'
					placeholder='Add content'
					className={`${
						content.length ? 'bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full resize-none`}
					value={content}
					name='content'
					onChange={handleChange}
				/>
				{errors.content && content.length === 0 && (
					<p className='text-red-500'>{errors.content}</p>
				)}
				{!isEditMode && (
					<input
						type='file'
						accept='image/*'
						className={`${
							file ? 'bg-green-500 text-neutral-950' : ''
						} rounded-lg w-full`}
						onChange={(e) => setFile(e.target.files[0])}
						disabled={isUploadingFile || isSubmittingForm}
						ref={fileInputRef}
					/>
				)}
				{errors.file && !file && <p className='text-red-500'>{errors.file}</p>}
				{isUploadingFile && progress < 100 && (
					<p>Uploading image... {Math.floor(progress)}%</p>
				)}
				<input
					type='text'
					placeholder='Add an image description'
					className={`${
						imageAlt.length ? 'bg-green-500' : ''
					} rounded-lg px-2 py-1 text-neutral-950 w-full`}
					value={imageAlt}
					name='imageAlt'
					onChange={handleChange}
				/>
				{errors.imageAlt && imageAlt.length === 0 && (
					<p className='text-red-500'>{errors.imageAlt}</p>
				)}
				<motion.button
					className='bg-neutral-50 hover:bg-neutral-900 text-neutral-900 hover:text-neutral-50 hover:ring-2 hover:ring-neutral-50 ring-inset font-medium rounded-full px-3 py-1 mx-auto'
					// whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					// disabled={progress !== null && progress < 100}
					disabled={isUploadingFile || isSubmittingForm}
				>
					{isEditMode ? 'Edit' : 'Add'}
				</motion.button>
				{isSubmittingForm && (
					<p>{isEditMode ? 'Editing' : ' Adding'} news...</p>
				)}
			</form>
			{/* )} */}
		</div>
	);
};
